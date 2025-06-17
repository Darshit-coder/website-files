document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('passwordForm');
  const input = document.getElementById('passwordInput');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const password = input.value;

    // Set your desired password and redirect URL
    if (password === ",''Z@s!!O[=CbbW") {
      window.location.href = "https://grannyandsmith-my.sharepoint.com/personal/lb_grannyandsmith_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Flb%5Fgrannyandsmith%5Fcom%2FDocuments%2FProjekt%5FDubai&ga=1";
    } else {
      alert("Incorrect password.");
      input.value = '';
    }
  });
});