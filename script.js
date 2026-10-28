
const mensajes = {
  partidos: {
    titulo: "¡A LA CANCHA!",
    texto: "Próximamente vas a poder jugar partidos contra la computadora."
  },
  sobres: {
    titulo: "¡ABRÍ TUS SOBRES!",
    texto: "Estamos preparando los sobres de bronce, plata, oro, élite y leyenda."
  },
  mercado: {
    titulo: "EL MERCADO",
    texto: "Próximamente vas a poder buscar jugadores y ficharlos para tu equipo."
  },
  club: {
    titulo: "MI CLUB",
    texto: "Acá vas a poder ver tu plantilla, tus monedas y tu progreso."
  }
};

const aviso = document.getElementById("notice");
const titulo = document.getElementById("noticeTitle");
const texto = document.getElementById("noticeText");

document.querySelectorAll(".menu-card").forEach((boton) => {
  boton.addEventListener("click", () => {
    const mensaje = mensajes[boton.dataset.section];

    if (mensaje) {
      titulo.textContent = mensaje.titulo;
      texto.textContent = mensaje.texto;
      aviso.hidden = false;
      aviso.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
});

document.getElementById("playButton").addEventListener("click", () => {
  titulo.textContent = "¡BIENVENIDO A FÚTBOL ULTIMATE!";
  texto.textContent = "Elegí una sección del menú para explorar el proyecto.";
  aviso.hidden = false;
  aviso.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

document.getElementById("closeNotice").addEventListener("click", () => {
  aviso.hidden = true;
});
