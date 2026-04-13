const STORAGE_KEYS = {
  users: "shadowArchiveUsers",
  session: "shadowArchiveSession",
};

const loginPageForm = document.getElementById("loginPageForm");
const loginPageMessage = document.getElementById("loginPageMessage");

bootstrap();

function bootstrap() {
  ensureAdmin();
  loginPageForm.addEventListener("submit", handleLogin);
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

function handleLogin(event) {
  event.preventDefault();

  const users = load(STORAGE_KEYS.users, []);
  const formData = new FormData(loginPageForm);
  const username = String(formData.get("username")).trim();
  const password = String(formData.get("password")).trim();

  const matchedUser = users.find(
    (user) => user.username === username && user.password === password,
  );

  if (!matchedUser) {
    loginPageMessage.textContent = "아이디 또는 비밀번호가 올바르지 않습니다.";
    return;
  }

  persist(STORAGE_KEYS.session, {
    username: matchedUser.username,
    nickname: matchedUser.nickname,
  });
  if (matchedUser.username === "admin") {
    localStorage.setItem("va-disable", "1");
  }

  loginPageForm.reset();
  loginPageMessage.textContent = `${matchedUser.nickname}님, 메인 페이지로 이동합니다.`;

  window.setTimeout(() => {
    window.location.href = "index.html";
  }, 700);
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
