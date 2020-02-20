var guardapaleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var pixeles = 1750;

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorSeleccionado.style.backgroundColor = colorActual;
  })
);

// genera la paleta
function generarPaletaDeColores() {
  for (let i = 0; i < nombreColores.length; i++) {
    let coloresRecorridos = document.createElement('div');
    coloresRecorridos.className = 'color-paleta';
    coloresRecorridos.style.backgroundColor = nombreColores[i];
    paleta.appendChild(coloresRecorridos);
  }
}

//genera la grilla
function generarGrillaDePixeles() {
  for (let i = 0; i < 1750; i++) {
    let grillaCreada = document.createElement('div');
    grillaPixeles.appendChild(grillaCreada);
  }
}

//mostrar color seleccionado
let colorSeleccionado = document.getElementById('indicador-de-color');
paleta.addEventListener('click', mostrarColorSeleccionado);

function mostrarColorSeleccionado(e) {
  colorSeleccionado.style.backgroundColor = e.target.style.backgroundColor;
}

//pintar pixel de la grilla
grillaPixeles.addEventListener('click', pintarpixel);

function pintarpixel(e) {
  e.target.style.backgroundColor = colorSeleccionado.style.backgroundColor;
}

//detectar mouse apretado
let detectaclick = false;

grillaPixeles.addEventListener('mousedown', haceClick);
grillaPixeles.addEventListener('mouseup', sueltaClick);

function haceClick(e) {
  detectaclick = true;
  //console.log('click apretado');
}

function sueltaClick(e) {
  detectaclick = false;
  //console.log('click suelto');
}

//pintar en movimiento
grillaPixeles.addEventListener('mouseover', pintaenmovimiento);

function pintaenmovimiento(e) {
  if (detectaclick) {
    e.target.style.backgroundColor = colorSeleccionado.style.backgroundColor;
  }

}

//borrar pantalla
function borrarGrilla() {
  $("#borrar").click(function () {
    const pixelesParaBorrar = $("#grilla-pixeles").find("div");
    $(pixelesParaBorrar).fadeOut();
    generarGrillaDePixeles();
  });
}


//cargar superheroe

let pixelBatman = document.getElementById('batman');
pixelBatman.addEventListener('click', function () {
  cargarSuperheroe(batman)
});

let pixelWonder = document.getElementById('wonder');
pixelWonder.addEventListener('click', function(){
  cargarSuperheroe(wonder)
});

let pixelFlash = document.getElementById('flash');
pixelFlash.addEventListener('click', function(){
  cargarSuperheroe(flash)
});

let pixelInvisible = document.getElementById('invisible');
pixelInvisible.addEventListener('click', function(){
  cargarSuperheroe(invisible)
});

//guardapantalla

$("#guardar").click (function () {
  guardarPixelArt();
});


generarPaletaDeColores();
generarGrillaDePixeles();
haceClick();
sueltaClick();
borrarGrilla();
