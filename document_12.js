(function () {
  function init() {
    const form = document.getElementById('passwordForm');
    const input = document.getElementById('passwordInput');
    if (!form || !input) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (input.value === "123456789") {
        window.location.href = "https://www.youtube.com/";
      } else {
        alert("Incorrect password.");
        input.value = '';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();