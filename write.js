const STORAGE_KEYS = {
  users: "shadowArchiveUsers",
  session: "shadowArchiveSession",
  posts: "shadowArchivePosts",
  anonymousId: "shadowArchiveAnonymousId",
};

const writePageForm = document.getElementById("writePageForm");
const writePageTitle = document.getElementById("writePageTitle");
const writePageSubmitBtn = document.getElementById("writePageSubmitBtn");
const writePageMessage = document.getElementById("writePageMessage");
const realityButtons = Array.from(document.querySelectorAll(".reality-btn"));
const writeRealityValue = document.getElementById("writeRealityValue");
const customPopup = document.getElementById("customPopup");
const customPopupTitle = document.getElementById("customPopupTitle");
const customPopupMessage = document.getElementById("customPopupMessage");
const customPopupConfirm = document.getElementById("customPopupConfirm");
const customPopupBackdrop = document.getElementById("customPopupBackdrop");

const params = new URLSearchParams(window.location.search);
const editPostId = params.get("edit")?.trim() || "";

bootstrap();

function bootstrap() {
  ensureAdmin();
  bindEvents();
  if (editPostId) {
    hydrateEditMode();
  }
}

function bindEvents() {
  writePageForm?.addEventListener("submit", handleSubmit);
  realityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setRealityValue(button.dataset.reality || "실제");
    });
  });
  customPopupConfirm?.addEventListener("click", handlePopupClose);
  customPopupBackdrop?.addEventListener("click", handlePopupClose);
}

function ensureAdmin() {
  const users = load(STORAGE_KEYS.users, []);
  const hasAdmin = users.some((user) => user.username === "admin");
  if (!hasAdmin) {
    users.unshift({
      username: "admin",
      nickname: "관리자",
      password: "admin1234",
      email: "admin@shadowarchive.local",
      birthdate: "",
      referral: "시스템",
    });
    persist(STORAGE_KEYS.users, users);
  }
}

function hydrateEditMode() {
  const posts = load(STORAGE_KEYS.posts, []);
  const target = posts.find((post) => post.id === editPostId);

  if (!target) {
    writePageMessage.textContent = "수정할 게시글을 찾을 수 없습니다.";
    writePageForm?.classList.add("hidden");
    return;
  }

  if (!isOwner(target)) {
    writePageMessage.textContent = "작성자 본인만 수정할 수 있습니다.";
    writePageForm?.classList.add("hidden");
    return;
  }

  writePageTitle.textContent = "사건 수정";
  writePageSubmitBtn.textContent = "수정 저장";
  writePageForm.elements.type.value = target.type;
  writePageForm.elements.status.value = target.status;
  writePageForm.elements.title.value = target.title;
  writePageForm.elements.content.value = target.content;
  writePageForm.elements.keywords.value = (target.relatedCases || [])
    .map((item) => `#${item}`)
    .join(" ");
  setRealityValue(target.reality || "실제");
}

function handleSubmit(event) {
  event.preventDefault();

  const posts = load(STORAGE_KEYS.posts, []);
  const formData = new FormData(writePageForm);
  const keywords = parseKeywordInput(String(formData.get("keywords")).trim());
  const payload = {
    title: String(formData.get("title")).trim(),
    content: String(formData.get("content")).trim(),
    type: String(formData.get("type")).trim(),
    status: String(formData.get("status")).trim(),
    reality: String(formData.get("reality")).trim(),
    clue: keywords.length ? keywords.join(", ") : "핵심 단서 정리 중",
    relatedCases: keywords,
  };

  if (
    !payload.title ||
    !payload.content ||
    !payload.type ||
    !payload.status ||
    !payload.reality ||
    keywords.length === 0
  ) {
    writePageMessage.textContent = "모든 항목을 입력해 주세요.";
    return;
  }

  if (editPostId) {
    const target = posts.find((post) => post.id === editPostId);
    if (!target || !isOwner(target)) {
      writePageMessage.textContent = "작성자 본인만 수정할 수 있습니다.";
      return;
    }

    Object.assign(target, payload);
    persist(STORAGE_KEYS.posts, posts);
    showCustomPopup("수정 완료", "게시글이 수정되었습니다.");
    return;
  }

  const author = getCurrentAuthor();
  posts.unshift({
    id: crypto.randomUUID(),
    ...payload,
    authorUsername: author.authorUsername,
    authorNickname: author.authorNickname,
    isAnonymous: author.isAnonymous,
    anonymousOwnerId: author.anonymousOwnerId,
    createdAt: new Date().toISOString(),
    likes: [],
    issuePoints: [],
    analysisPrompts: [],
    opsSummary: "",
    timeline: [],
  });

  persist(STORAGE_KEYS.posts, posts);
  showCustomPopup("등록 완료", "새 사건 글이 등록되었습니다.");
}

function setRealityValue(value) {
  if (writeRealityValue) {
    writeRealityValue.value = value;
  }
  realityButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.reality === value);
  });
}

function showCustomPopup(title, message) {
  customPopupTitle.textContent = title;
  customPopupMessage.textContent = message;
  customPopup.classList.remove("hidden");
  customPopup.setAttribute("aria-hidden", "false");
}

function handlePopupClose() {
  window.location.href = "index.html";
}

function parseKeywordInput(rawValue) {
  return Array.from(
    new Set(
      String(rawValue || "")
        .split(/[\s,]+/)
        .map((item) => item.replace(/^#+/, "").trim())
        .filter(Boolean),
    ),
  ).slice(0, 6);
}

function getCurrentAuthor() {
  const session = load(STORAGE_KEYS.session, null);
  if (session) {
    return {
      authorUsername: session.username,
      authorNickname: session.nickname,
      isAnonymous: false,
      anonymousOwnerId: "",
    };
  }

  return {
    authorUsername: "guest",
    authorNickname: "익명",
    isAnonymous: true,
    anonymousOwnerId: getAnonymousId(),
  };
}

function isOwner(item) {
  if (item.isAnonymous) {
    return item.anonymousOwnerId && item.anonymousOwnerId === getAnonymousId();
  }

  const session = load(STORAGE_KEYS.session, null);
  return Boolean(session && item.authorUsername === session.username);
}

function getAnonymousId() {
  const existing = load(STORAGE_KEYS.anonymousId, "");
  if (existing) {
    return existing;
  }

  const nextId = crypto.randomUUID();
  persist(STORAGE_KEYS.anonymousId, nextId);
  return nextId;
}

function persist(key, value) {
  if (value === null) {
    localStorage.removeItem(key);
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
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
