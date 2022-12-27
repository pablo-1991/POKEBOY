// PRODUCTOS
const productos = [
    // GAMEBOY
    {
        id: "gameboy-01",
        titulo: "Pokemon Rojo",
        imagen: "img/gameboy/Car3Fmon_Rojo.jpg",
        categoria: {
            nombre: "Gameboy",
            id: "gameboy"
        },
        precio: 1000
    },
    {
        id: "gameboy-02",
        titulo: "Pokemon Azul",
        imagen: "img/gameboy/poke_azul.jpg",
        categoria: {
            nombre: "Gameboy",
            id: "gameboy"
        },
        precio: 1000
    },
    {
        id: "gameboy-03",
        titulo: "Pokemon Verde",
        imagen: "img/gameboy/Car3Fmon_Verde_3Fn29.jpg",
        categoria: {
            nombre: "Gameboy",
            id: "gameboy"
        },
        precio: 1000
    },
    {
        id: "gameBoy-04",
        titulo: "Pokemon Amarillo",
        imagen: "img/gameboy/Pok3Fmon_Amarillo.jpg",
        categoria: {
            nombre: "Gameboy",
            id: "gameboy"
        },
        precio: 1000
    },

    // GAMEBOY COLOR
    {
        id: "gameboyColor-01",
        titulo: "Pokemon Oro",
        imagen: "img/gameboy_color/Pokemon_Edici3Fn_Oro.jpg",
        categoria: {
            nombre: "Gameboy Color",
            id: "gameBoyColor"
        },
        precio: 2000
    },
    {
        id: "gameboyColor-02",
        titulo: "Pokemon Plata",
        imagen: "img/gameboy_color/Pokemon_Edici3Fn_Plata.jpg",
        categoria: {
            nombre: "Gameboy Color",
            id: "gameBoyColor"
        },
        precio: 2000
    },
    {
        id: "gameboyColor-03",
        titulo: "Pokemon Cristal",
        imagen: "img/gameboy_color/Pokemon_Edici3Fn_Cristal.jpg",
        categoria: {
            nombre: "Gameboy Color",
            id: "gameBoyColor"
        },
        precio: 2000
    },
    {
        id: "gameboyColor-04",
        titulo: "Pokemon Pinball",
        imagen: "img/gameboy_color/Pokemonpinballbox-es.jpg",
        categoria: {
            nombre: "Gameboy Color",
            id: "gameBoyColor"
        },
        precio: 2000
    },

    // GAMEBOY ADVANCE
    {
        id: "gameboyAdvance-01",
        titulo: "Pokemon Rubí",
        imagen: "img/gameboy_advance/Car3F.jpg",
        categoria: {
            nombre: "Gameboy Advance",
            id: "gameBoyAdvance"
        },
        precio: 2500
    },
    {
        id: "gameboyAdvance-02",
        titulo: "Pokemon Zafiro",
        imagen: "img/gameboy_advance/Car3Ftula_de_Zafiro.jpg",
        categoria: {
            nombre: "Gameboy Advance",
            id: "gameBoyAdvance"
        },
        precio: 2500
    },
    {
        id: "gameboyAdvance-03",
        titulo: "Pokemon Esmeralda",
        imagen: "img/gameboy_advance/Caratula_Esmeralda.jpg",
        categoria: {
            nombre: "Gameboy Advance",
            id: "gameBoyAdvance"
        },
        precio: 2500
    },
    {
        id: "gameboyAdvance-04",
        titulo: "Pokemon Rojo Fuego",
        imagen: "img/gameboy_advance/Car3Ftula_de_Rojo_Fuego.jpg",
        categoria: {
            nombre: "Gameboy Advance",
            id: "gameBoyAdvance"
        },
        precio: 2500
    },
    {
        id: "gameboyAdvance-05",
        titulo: "Pokemon Verde Hoja",
        imagen: "img/gameboy_advance/Car3Ftula_de_Verde_Hoja.jpg",
        categoria: {
            nombre: "Gameboy Advance",
            id: "gameBoyAdvance"
        },
        precio: 2500
    },
    {
        id: "gameboyAdvance-06",
        titulo: "Pokemon M. Misterioso Rojo",
        imagen: "img/gameboy_advance/Car3Fmon_Mundo_Misterioso_equipo_de_rescate_rojo.jpg",
        categoria: {
            nombre: "Gameboy Advance",
            id: "gameBoyAdvance"
        },
        precio: 2500
    },

    // NINTENDO DS
    {
        id: "nintendoDs-01",
        titulo: "Pokemon Diamante",
        imagen: "img/nintendo_ds/Pok3Fmon_Diamante.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-02",
        titulo: "Pokemon Perla",
        imagen: "img/nintendo_ds/Pok3Fmon_Perla.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-03",
        titulo: "Pokemon Platino",
        imagen: "img/nintendo_ds/Car3Fmon_Platino_29.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-04",
        titulo: "Pokemon Corazón de Oro",
        imagen: "img/nintendo_ds/Pok3Fn_Oro_HeartGold_car3Ftula_ES.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-05",
        titulo: "Pokemon Alma de Plata",
        imagen: "img/nintendo_ds/Pok3Fn_Plata_SoulSilver_car3Ftula_ES.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-06",
        titulo: "Pokemon Blanco",
        imagen: "img/nintendo_ds/Pkmnwhitesp.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-07",
        titulo: "Pokemon Negro",
        imagen: "img/nintendo_ds/Portblacksp.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-08",
        titulo: "Pokemon Blanco 2",
        imagen: "img/nintendo_ds/Box_Pok3Fmon_Blanco_2.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-09",
        titulo: "Pokemon Negro 2",
        imagen: "img/nintendo_ds/Box_Pok3Fmon_Negro_2.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-10",
        titulo: "Pokemon Ranger",
        imagen: "img/nintendo_ds/PokemonRanger.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-11",
        titulo: "Pokemon Ranger Almia",
        imagen: "img/nintendo_ds/Car3Fmon_Ranger_Sombras_de_Almia.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-12",
        titulo: "Pokemon Ranger Trazos Luz",
        imagen: "img/nintendo_ds/PR3.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-13",
        titulo: "Pokemon M. Misterioso Azul",
        imagen: "img/nintendo_ds/Car3Fmon_Mundo_Misterioso_equipo_de_rescate_azul.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-14",
        titulo: "Pokemon M. Misterioso Cielo",
        imagen: "img/nintendo_ds/PMM3.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },
    {
        id: "nintendoDs-15",
        titulo: "Pokemon M.Misterioso Tiempo",
        imagen: "img/nintendo_ds/Car3Fmon_Mundo_Misterioso_Exploradores_del_Tiempo.jpg",
        categoria: {
            nombre: "Nintendo DS",
            id: "nintendoDs"
        },
        precio: 4000
    },

    // NINTENDO 3DS
    {
        id: "nintendo3Ds-01",
        titulo: "Pokemon X",
        imagen: "img/nintendo_3ds/Pok3Ftulahhhhhh.jpg",
        categoria: {
            nombre: "Nintendo 3DS",
            id: "nintendo3Ds"
        },
        precio: 7000
    },
    {
        id: "nintendo3Ds-02",
        titulo: "Pokemon Y",
        imagen: "img/nintendo_3ds/Pok3Ftulatt.jpg",
        categoria: {
            nombre: "Nintendo 3DS",
            id: "nintendo3Ds"
        },
        precio: 7000
    },
    {
        id: "nintendo3Ds-03",
        titulo: "Pokemon Sol",
        imagen: "img/nintendo_3ds/Car3Fmon_Sol.jpg",
        categoria: {
            nombre: "Nintendo 3DS",
            id: "nintendo3Ds"
        },
        precio: 7000
    },
    {
        id: "nintendo3Ds-04",
        titulo: "Pokemon Luna",
        imagen: "img/nintendo_3ds/Car3Fmon_Luna.jpg",
        categoria: {
            nombre: "Nintendo 3DS",
            id: "nintendo3Ds"
        },
        precio: 7000
    },
    {
        id: "nintendo3Ds-05",
        titulo: "Pokemon UltraSol",
        imagen: "img/nintendo_3ds/Car3Fmon_Ultrasol.jpg",
        categoria: {
            nombre: "Nintendo 3DS",
            id: "nintendo3Ds"
        },
        precio: 7000
    },
    {
        id: "nintendo3Ds-06",
        titulo: "Pokemon UltraLuna",
        imagen: "img/nintendo_3ds/Car3Fmon_Ultraluna.jpg",
        categoria: {
            nombre: "Nintendo 3DS",
            id: "nintendo3Ds"
        },
        precio: 7000
    },
    {
        id: "nintendo3Ds-07",
        titulo: "Pokemon Rubí Omega",
        imagen: "img/nintendo_3ds/Car3Fmon_Rub3F_Omega.jpg",
        categoria: {
            nombre: "Nintendo 3DS",
            id: "nintendo3Ds"
        },
        precio: 7000
    },
    {
        id: "nintendo3Ds-08",
        titulo: "Pokemon Zafiro Alfa",
        imagen: "img/nintendo_3ds/Car3Fmon_Zafiro_Alfa.jpg",
        categoria: {
            nombre: "Nintendo 3DS",
            id: "nintendo3Ds"
        },
        precio: 7000
    },
    {
        id: "nintendo3Ds-09",
        titulo: "Pokemon M. Misterioso Infinito",
        imagen: "img/nintendo_3ds/Car3Fmon_MM_Portales_al_Infinito.jpg",
        categoria: {
            nombre: "Nintendo 3DS",
            id: "nintendo3Ds"
        },
        precio: 7000
    },
    {
        id: "nintendo3Ds-10",
        titulo: "Pokemon M. Megamisterioso",
        imagen: "img/nintendo_3ds/Car3Fmon_mundo_megamisterioso.jpg",
        categoria: {
            nombre: "Nintendo 3DS",
            id: "nintendo3Ds"
        },
        precio: 7000
    },

    // NINTENDO SWITCH
    {
        id: "nintendoSwitch-01",
        titulo: "Pokemon Let's Go Pikachu!",
        imagen: "img/nintendo_switch/Carátula_Pokémon_Let's_Go_Pikachu.png",
        categoria: {
            nombre: "Nintendo Switch",
            id: "nintendoSwitch"
        },
        precio: 12000
    },
    {
        id: "nintendoSwitch-02",
        titulo: "Pokemon Let's Go Eevee!",
        imagen: "img/nintendo_switch/Carátula_Pokémon_Let's_Go_Eevee.png",
        categoria: {
            nombre: "Nintendo Switch",
            id: "nintendoSwitch"
        },
        precio: 12000
    },
    {
        id: "nintendoSwitch-03",
        titulo: "Pokemon Escudo",
        imagen: "img/nintendo_switch/Carátula_Pokémon_Escudo.png",
        categoria: {
            nombre: "Nintendo Switch",
            id: "nintendoSwitch"
        },
        precio: 12000
    },
    {
        id: "nintendoSwitch-04",
        titulo: "Pokemon Espada",
        imagen: "img/nintendo_switch/Carátula_Pokémon_Espada.png",
        categoria: {
            nombre: "Nintendo Switch",
            id: "nintendoSwitch"
        },
        precio: 12000
    },
    {
        id: "nintendoSwitch-05",
        titulo: "Pokemon Diamante Brillante",
        imagen: "img/nintendo_switch/260px-Carátula_Pokémon_Diamante_Brillante.png",
        categoria: {
            nombre: "Nintendo Switch",
            id: "nintendoSwitch"
        },
        precio: 12000
    },
    {
        id: "nintendoSwitch-06",
        titulo: "Pokemon Perla Reluciente",
        imagen: "img/nintendo_switch/260px-Carátula_Pokémon_Perla_Reluciente.png",
        categoria: {
            nombre: "Nintendo Switch",
            id: "nintendoSwitch"
        },
        precio: 12000
    },
    {
        id: "nintendoSwitch-07",
        titulo: "Pokemon Leyendas: ARCEUS",
        imagen: "img/nintendo_switch/260px-Carátula_Leyendas_Pokémon_Arceus.png",
        categoria: {
            nombre: "Nintendo Switch",
            id: "nintendoSwitch"
        },
        precio: 12000
    },
    {
        id: "nintendoSwitch-08",
        titulo: "Pokemon Púrpura",
        imagen: "img/nintendo_switch/260px-Carátula_Pokémon_Púrpura.png",
        categoria: {
            nombre: "Nintendo Switch",
            id: "nintendoSwitch"
        },
        precio: 12000
    },
    {
        id: "nintendoSwitch-09",
        titulo: "Pokemon Escarlata",
        imagen: "img/nintendo_switch/260px-Carátula_Pokémon_Escarlata.png",
        categoria: {
            nombre: "Nintendo Switch",
            id: "nintendoSwitch"
        },
        precio: 12000
    },
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}