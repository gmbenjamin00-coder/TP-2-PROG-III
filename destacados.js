const tarjetas = document.querySelectorAll(".tarjeta");
const contador = document.getElementById("contador");

tarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("click", () => {
    tarjeta.classList.toggle("seleccionada");

    const seleccionadas = document.querySelectorAll(".seleccionada").length;

    contador.textContent = `Seleccionadas: ${seleccionadas}`;
  });
});
