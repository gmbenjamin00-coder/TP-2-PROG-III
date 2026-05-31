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

  btn.disabled = true;
  btn.disabled = false;
  btn.disabled = true;
  btn2.disabled = false;

  if (btn.disabled) {
  } else if (btn2.disabled === false) {
    meriendas.length = 0;
    btn.disabled = false;
    btn2.disabled = false;
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
