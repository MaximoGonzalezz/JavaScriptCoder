const shopContenedor = document.getElementById("shopContenedor");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("barraContainer");


const productos = [
  {
    id: 1,
    nombre: "sorrentinos",
    precio: 1500,
    img: "",
  },

  {
    id: 1,
    nombre: "ravioles",
    precio: 1500,
    img: "https://stock.adobe.com/es/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Binclude_stock_enterprise%5D=0&filters%5Bis_editorial%5D=0&filters%5Bfree_collection%5D=0&filters%5Bcontent_type%3Aimage%5D=1&k=ravioles&order=relevance&safe_search=1&search_page=1&search_type=usertyped&acp=&aco=ravioles&get_facets=0&asset_id=610132820 ",

  },
  {
    id: 1,
    nombre: "ñoquis rellenos",
    precio: 1300,
    img: "https://stock.adobe.com/es/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=%C3%B1oquis+rellenos&k=%C3%B1oquis+rellenos&get_facets=0&asset_id=495315406",
  },
  {
    id: 1,
    nombre: "ñoquis",
    precio: 1000,
    img: "https://stock.adobe.com/es/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=%C3%B1oquis&k=%C3%B1oquis&get_facets=0&asset_id=330259977",
  },
];

let carrito = [];

productos.forEach((producto) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
  <img src="${producto.img}">
  <h3> ${producto.nombre}  </h3>
  <p class="precio"> ${producto.precio} $ </p>
  `;

  shopContenedor.append(content);

  let comprar = document.createElement("button")
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    carrito.push({
      id: producto.id,
      img: producto.img,
      nombre: producto.nombre,
      precio: producto.precio,

    });
  })

  });

  verCarrito.addEventListener("click", () => {

    const modalHeader = document.createElement("div");
    modalHeader.className = "barra-header"
    modalHeader.innerHTML = ` 
    <h2 class= "modal-header-titulo"> Carrito. </h2>` ;

    barraContainer.append(modalHeader);
    const modalButton = document.createElement("h2");
    modalButton.innerText = "x";
    modalButton.className = "barra-header-button";
    modalHeader.append(modalButton);

    carrito.forEach((producto) => {
      let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
    <h2> ${producto.nombre}</h2>
    <p> ${producto.precio} $ </p>
    `;

      modalContainer.append(carritoContent);

    });
  })

