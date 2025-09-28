function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "1234") {
      setCookie("passwordProtected", "true", 30); // Change 30 to the desired number of days
      document.getElementById("protected-content").style.display = "block";
      document.getElementById("password-form").style.display = "none";
    } else {
      alert("Incorrect password. Please try again.");
    }
  }

  function checkCookie() {
    var isProtected = getCookie("passwordProtected");
    if (isProtected) {
      document.getElementById("protected-content").style.display = "block";
    } else {
      document.getElementById("password-form").style.display = "block";
    }
  }

  window.onload = function() {
    checkCookie();
  }
