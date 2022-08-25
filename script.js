function DarkMode() {
  let icon = document.getElementById("toggleDark");
  let body = document.body;
  icon.classList.toggle("bi-moon");

  if (icon.classList.toggle("bi-brightness-high-fill")) {
    body.style.backgroundColor = "#dad7cd";
    document.getElementById("contactME").style.backgroundColor = "#344e41";
    document.getElementById("contactME").style.borderTopColor = "#588157";
    body.style.transition = "2s";
    document.getElementById("toggleDark").style.color = "#344e41";
  } else {
    body.style.backgroundColor = "#212224";
    document.getElementById("contactME").style.backgroundColor = "#1d2e28";
    document.getElementById("contactME").style.borderTopColor = "#066839";
    body.style.transition = "2s";
    document.getElementById("toggleDark").style.color = "#066839";
  }
}
