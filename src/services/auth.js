import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/config/firebaseConfig";
import { showErrorToast } from "@/utils/Toast";

let sessionTimeout;

export const setupSessionTimeout = () => {
  const sessionExpiryTime = 30 * 60 * 1000; // 30 minutes in milliseconds
  const lastLoginTime = Date.now();

  sessionStorage.setItem("lastLoginTime", lastLoginTime);

  sessionTimeout = setTimeout(() => {
    showErrorToast("Your session has expired. Please log in again.");
    signOut(auth);
    window.location.href = "/login";
  }, sessionExpiryTime);
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    setupSessionTimeout();
  } else {
    clearTimeout(sessionTimeout);
  }
});
