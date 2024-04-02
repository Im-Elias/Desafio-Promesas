// Promesas
const titulos = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    data.length = 20;
    data.forEach((element) => {
      console.log(element.title);
    });
  } catch (error) {
    console.log(error);
    console.log("No se pudo cargar los datos");
  }
};

const infoEnviada = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Información enviada");
    }, 3000);
  });
};

const monstrarInfo = async () => {
  const info = await infoEnviada();
  console.log(info);
};

const urlTitulos = "https://jsonplaceholder.typicode.com/photos";

//Llamadas
titulos(urlTitulos);
monstrarInfo();
console.log("Cargando...");
