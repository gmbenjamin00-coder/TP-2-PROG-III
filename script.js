const lista = document.getElementById("lista");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const countText = document.getElementById("count");
const meriendas = [
  "Facturas",
  "Pebete",
  "Tortilla",
  "Sanguche de miga",
  "Torta frita",
  "Churros",
  "Galletas",
];

btn.addEventListener("click", () => {
  meriendas.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });
  // Deshabilitar el botón para evitar cargas múltiples

  // Habilitar el botón de cargar nuevamente después de cargar las meriendas, pero evitar que se pueda cargar más de una vez
  btn.disabled = false; // Permitir cargar nuevamente
  btn.disabled = true; // Deshabilitar el botón para evitar cargas múltiples
  btn2.disabled = false; // Habilitar el botón de limpiar
  // Mostrar la cantidad de meriendas cargadas
  countText.textContent = `Cantidad de meriendas cargadas: ${meriendas.length}`;
  if (btn.disabled) {
    countText.textContent += " (No se pueden cargar más meriendas)";
  } else if (btn2.disabled === false) {
    countText.textContent += " (Puedes cargar más meriendas)";
    meriendas.length = 0; // Vaciar el array de meriendas
    btn.disabled = false; // Habilitar el botón para cargar nuevamente
    btn2.disabled = false; // Habilitar el botón de limpiar
  }
});

btn2.addEventListener("click", () => {
  //Limpiar array empleando while
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
    if (btn2.disabled === false && btn.disabled === true) {
      countText.textContent = "Meriendas limpiadas. Puedes cargar nuevamente.";
      btn.disabled = false; // Habilitar el botón para cargar nuevamente
      //btn2.disabled = true; // Deshabilitar el botón de limpiar
    }
  }
});
