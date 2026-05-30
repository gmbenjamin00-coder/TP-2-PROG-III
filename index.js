const lista = document.getElementById("lista");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

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

  //btn.disabled = true; // Deshabilitar el botón para evitar cargas múltiples

  // Habilitar el botón de cargar nuevamente después de cargar las meriendas, pero evitar que se pueda cargar más de una vez
  btn.disabled = false; // Permitir cargar nuevamente
  btn.disabled = true; // Deshabilitar el botón para evitar cargas múltiples
  btn2.disabled = false; // Habilitar el botón de limpiar
  // Mostrar la cantidad de meriendas cargadas

  if (btn.disabled) {
    //btn3.textContent += " (No se pueden cargar más meriendas)";
  } else if (btn2.disabled === false) {
    //btn3.textContent += " (Puedes cargar más meriendas)";
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
      //btn3.textContent = "Meriendas limpiadas. Puedes cargar nuevamente.";
      btn.disabled = false; // Habilitar el botón para cargar nuevamente
      //btn2.disabled = true; // Deshabilitar el botón de limpiar
    }
  }
  document.getElementById("countText").textContent = ""; // Limpiar el texto de cantidad de meriendas
});

btn3.addEventListener("click", () => {
  const count = lista.children.length;
  document.getElementById("countText").textContent =
    `Cantidad de meriendas: ${count}`;
  if (count === 0) {
    document.getElementById("countText").textContent +=
      " (No hay meriendas cargadas)";
  }
});
