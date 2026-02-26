export function esquerda() {
  const esquerda = document.querySelectorAll(".esquerda");
  const observerEsquerda = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("entrou");
      }
    });
  });

  esquerda.forEach((s) => {
    observerEsquerda.observe(s);
  });
}

export function direita() {
  const direita = document.querySelectorAll(".direita");

  const observerDireita = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("entrou");
      }
    });
  });

  direita.forEach((d) => {
    observerDireita.observe(d);
  });
}

export function cima() {
  const cima = document.querySelectorAll(".cima");

  const obseverCima = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("entrouu");
      }
    });
  });

  cima.forEach((c) => {
    obseverCima.observe(c);
  });

  console.log(obseverCima);
}

export function baixo() {
  const baixo = document.querySelectorAll(".baixo");

  const obseverBaixo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("entrouu");
      }
    });
  });

  baixo.forEach((b) => {
    obseverBaixo.observe(b);
  });
}
