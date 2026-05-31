const listado = document.getElementById("listado");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Cargar arreglo usando un forEach
btn.addEventListener("click", () => {
  listado.innerHTML = "";
  array.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    listado.appendChild(li);
  });
});

btn2.addEventListener("click", () => {
  while (listado.firstChild) {
    listado.removeChild(listado.firstChild);
  }
});

btn3.addEventListener("click", () => {
  const pares = array.filter((num) => num % 2 === 0);
  listado.innerHTML = "";
  pares.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    listado.appendChild(li);
  });
});

btn4.addEventListener("click", () => {
  const impares = array.filter((num) => num % 2 !== 0);
  listado.innerHTML = "";
  impares.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    listado.appendChild(li);
  });
});
