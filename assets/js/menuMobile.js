export function MenuAberto() {
  const menu_Mobile = document.getElementById("menu_Mobile");
  const header_Mobile = document.getElementById("header_Mobile");

  menu_Mobile.addEventListener("click", () => {
    if (header_Mobile.classList.contains("header_Mobile_Entrou")) {
      header_Mobile.classList.remove("header_Mobile_Entrou");
      menu_Mobile.src = "assets/img/menu-aberto.webp";
    } else {
      header_Mobile.classList.add("header_Mobile_Entrou");
      menu_Mobile.src = "assets/img/menu-fechado.webp";
    }
  });
}

export function aMobile() {
  const a = document.querySelectorAll(".a_Nav_Mobile");
  const menu_Mobile = document.getElementById("menu_Mobile");
  const header_Mobile = document.getElementById("header_Mobile");

  a.forEach((i) => {
    i.addEventListener("click", () => {
      if (header_Mobile.classList.contains("header_Mobile_Entrou")) {
        header_Mobile.classList.remove("header_Mobile_Entrou");
        menu_Mobile.src = "assets/img/menu-aberto.webp";
      } else {
        header_Mobile.classList.add("header_Mobile_Entrou");
        menu_Mobile.src = "assets/img/menu-fechado.webp";
      }
    });
  });
}
