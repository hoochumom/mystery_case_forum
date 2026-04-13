const STORAGE_KEYS = {
  users: "shadowArchiveUsers",
  session: "shadowArchiveSession",
};

const signupPageForm = document.getElementById("signupPageForm");
const signupPageMessage = document.getElementById("signupPageMessage");

bootstrap();

function bootstrap() {
  ensureAdmin();
  signupPageForm.addEventListener("submit", handleSignup);
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

function handleSignup(event) {
  event.preventDefault();

  const users = load(STORAGE_KEYS.users, []);
  const formData = new FormData(signupPageForm);
  const username = String(formData.get("username")).trim();
  const nickname = String(formData.get("nickname")).trim();
  const password = String(formData.get("password")).trim();
  const passwordConfirm = String(formData.get("passwordConfirm")).trim();
  const email = String(formData.get("email")).trim().toLowerCase();
  const birthdate = String(formData.get("birthdate")).trim();
  const referral = String(formData.get("referral")).trim();

  if (password !== passwordConfirm) {
    signupPageMessage.textContent = "비밀번호와 비밀번호 확인이 일치하지 않습니다.";
    return;
  }

  if (users.some((user) => user.username === username)) {
    signupPageMessage.textContent = "이미 사용 중인 아이디입니다.";
    return;
  }

  if (users.some((user) => user.email?.toLowerCase() === email)) {
    signupPageMessage.textContent = "이미 가입된 이메일 주소입니다.";
    return;
  }

  users.push({
    username,
    nickname,
    password,
    email,
    birthdate,
    referral,
  });

  persist(STORAGE_KEYS.users, users);
  persist(STORAGE_KEYS.session, { username, nickname });
  signupPageMessage.textContent = `${nickname}님, 가입이 완료되었습니다. 메인 페이지로 이동합니다.`;
  signupPageForm.reset();

  window.setTimeout(() => {
    window.location.href = "index.html";
  }, 900);
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
