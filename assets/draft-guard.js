/**
 * Lightweight draft page guard for static hosting.
 * This does not replace real auth, but blocks casual access.
 * Change ACCESS_PHRASE to your own private phrase.
 */
(function () {
  var ACCESS_PHRASE = "change-this-passphrase";
  var STORAGE_KEY = "arnabDraftAccess";

  function denyAccess() {
    window.location.href = "/";
  }

  if (!window.location.pathname.includes("/2026/01/29/Downsampling-Dataset/")) {
    return;
  }

  try {
    var existing = window.sessionStorage.getItem(STORAGE_KEY);
    if (existing === ACCESS_PHRASE) {
      return;
    }

    var input = window.prompt("Private draft preview. Enter passphrase:");
    if (input && input === ACCESS_PHRASE) {
      window.sessionStorage.setItem(STORAGE_KEY, ACCESS_PHRASE);
      return;
    }
  } catch (error) {
    denyAccess();
    return;
  }

  denyAccess();
})();
