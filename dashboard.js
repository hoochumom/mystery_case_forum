const STORAGE_KEYS = {
  posts: "shadowArchivePosts",
  comments: "shadowArchiveComments",
};

const topPostsList = document.getElementById("topPostsList");
const dashboardPostCount = document.getElementById("dashboardPostCount");
const dashboardLikeCount = document.getElementById("dashboardLikeCount");
const dashboardCommentCount = document.getElementById("dashboardCommentCount");
const dashboardHighlights = document.getElementById("dashboardHighlights");

const posts = normalizePosts(load(STORAGE_KEYS.posts, []));
const comments = normalizeComments(load(STORAGE_KEYS.comments, []));

renderDashboard();

function renderDashboard() {
  const ranked = posts
    .map((post) => {
      const postComments = comments.filter((comment) => comment.postId === post.id);
      const postLikes = getLikeCount(post.likes);
      const commentLikes = postComments.reduce(
        (sum, comment) => sum + getLikeCount(comment.likes),
        0,
      );

      return {
        ...post,
        commentCount: postComments.length,
        likeCount: postLikes,
        commentLikeCount: commentLikes,
      };
    })
    .sort((a, b) => b.likeCount - a.likeCount || new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 10);

  dashboardPostCount.textContent = String(posts.length);
  dashboardLikeCount.textContent = String(
    posts.reduce((sum, post) => sum + getLikeCount(post.likes), 0) +
      comments.reduce((sum, comment) => sum + getLikeCount(comment.likes), 0),
  );
  dashboardCommentCount.textContent = String(comments.length);

  topPostsList.innerHTML = "";

  if (!ranked.length) {
    topPostsList.innerHTML = `<div class="rank-card">아직 집계할 게시물이 없습니다.</div>`;
  } else {
    ranked.forEach((post, index) => {
      const item = document.createElement("article");
      item.className = "rank-card";
      item.innerHTML = `
        <div class="rank-head">
          <div style="display:flex; gap:14px; align-items:flex-start;">
            <span class="rank-number">${index + 1}</span>
            <div>
              <h3 class="rank-title">${escapeHtml(post.title)}</h3>
              <p class="rank-meta">${escapeHtml(post.type)} · ${escapeHtml(post.status)} · @${escapeHtml(post.authorUsername)}</p>
            </div>
          </div>
          <span class="metric-pill">좋아요 ${post.likeCount}</span>
        </div>
        <p class="rank-description">${escapeHtml(post.clue)}</p>
        <div class="rank-metrics">
          <span class="metric-pill">게시글 좋아요 ${post.likeCount}</span>
          <span class="metric-pill">토론 ${post.commentCount}</span>
          <span class="metric-pill">댓글 좋아요 ${post.commentLikeCount}</span>
        </div>
      `;
      topPostsList.append(item);
    });
  }

  renderHighlights(ranked);
}

function renderHighlights(ranked) {
  const mostLiked = [...posts].sort(
    (a, b) => getLikeCount(b.likes) - getLikeCount(a.likes),
  )[0];
  const hottestDiscussion = [...posts].sort(
    (a, b) =>
      comments.filter((comment) => comment.postId === b.id).length -
      comments.filter((comment) => comment.postId === a.id).length,
  )[0];

  dashboardHighlights.innerHTML = "";

  const cards = [
    {
      title: "가장 많은 게시글 좋아요",
      body: ranked[0]
        ? `${ranked[0].title} (${ranked[0].likeCount} 좋아요)`
        : "집계 가능한 게시물이 없습니다.",
    },
    {
      title: "가장 많은 좋아요",
      body: mostLiked
        ? `${mostLiked.title} (${getLikeCount(mostLiked.likes)} 좋아요)`
        : "집계 가능한 게시물이 없습니다.",
    },
    {
      title: "가장 활발한 토론",
      body: hottestDiscussion
        ? `${hottestDiscussion.title} (${comments.filter((comment) => comment.postId === hottestDiscussion.id).length}개 댓글)`
        : "집계 가능한 게시물이 없습니다.",
    },
  ];

  cards.forEach((card) => {
    const el = document.createElement("article");
    el.className = "highlight-card";
    el.innerHTML = `
      <h3 class="rank-title">${escapeHtml(card.title)}</h3>
      <p>${escapeHtml(card.body)}</p>
    `;
    dashboardHighlights.append(el);
  });
}

function getLikeCount(likes) {
  return Array.isArray(likes) ? likes.length : 0;
}

function normalizeComments(items) {
  return items.map((item) => ({
    ...item,
    parentId: item.parentId ?? null,
    likes: Array.isArray(item.likes) ? item.likes : [],
  }));
}

function normalizePosts(items) {
  return items.map((item) => ({
    ...item,
    likes: Array.isArray(item.likes) ? item.likes : [],
  }));
}

function load(key, fallback) {
  const stored = localStorage.getItem(key);
  if (!stored) {
    return fallback;
  }

  try {
    return JSON.parse(stored);
  } catch (error) {
    console.error(`${key} 데이터를 읽지 못했습니다.`, error);
    return fallback;
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}
