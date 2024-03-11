// Ocultamos las imagenes y cambiamos el height
function ocultarImagrnYParrafo() {
  let img = document.querySelector(".imagen-buscando");
  let p = document.querySelector(".parrafos");
  let height = document.getElementById("height");
  height.style.height = "85%";


  // Traemos a los dos p
  let p1 = p.children[0];
  let p2 = p.children[1];

  
  // Añadimos clase para ocultar
  img.classList.add("oculto");
  p1.classList.add("oculto");
  p2.classList.add("oculto");
}

function evaluarDesencriptacion() {
  let input = document.querySelector(".input-text").value;
  // EVALUAR INPUT Y DESENCRIPTAR

  if (input.trim() === "") {
    alert("No has ingresado ningun texto");
  } else if (verificarMinusculasCaracteres(input) == false) {
    alert("Solo se admiten textos en minusculas");
  } else {
    input = desencriptar(input);

    ocultarImagenYactivarBoton();

    // Traigo el p del resultado
    let texto = document.getElementById("resultado");
    // le agrego al parrafo el texto del input
    texto.textContent = input;
  }
}

function evaluarEncriptacion() {
  let input = document.querySelector(".input-text").value;
  // EVALUAR INPUT Y ENCRIPTAR

  if (input.trim() === "") {
    alert("No ha ingresado nada en el input");
  } else if (verificarMinusculasCaracteres(input) == false) {
    alert("Solo se admiten textos en minusculas");
  } else {
    input = encriptar(input);

    ocultarImagenYactivarBoton();

    // Traigo el p del resultado
    let texto = document.getElementById("resultado");
    // le agrego al parrafo el texto del input
    texto.textContent = input;
  }
}

function ocultarImagenYactivarBoton() {
  //activa la barra en el caso que el parrafo ocupe todo el alto
  let colum2 = document.getElementById("ocultar");
  colum2.style.overflow = "auto";
  //Activa el boton de copiar
  let buttonCopy = document.getElementById("copiar");
  buttonCopy.style.display = "inline";

  ocultarImagrnYParrafo();
}

// Accion de copiar el texto
document.querySelector(".button-copiar").onclick = async () => {
  let text = document.getElementById("resultado").textContent;

  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.log(error);
  }
};

// Logica de encriptacion
function encriptar(text1) {
  let text = text1.split(""); // Convertir el string a un array

  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "a":
        text[i] = "enter";
        break;

      case "e":
        text[i] = "imes";
        break;

      case "i":
        text[i] = "ai";
        break;

      case "o":
        text[i] = "ober";
        break;

      case "u":
        text[i] = "ufat";
        break;
    }
  }
  text = text.join("");
  return text;
}

// Logica de desencriptacion

function desencriptar(text) {
  if (text.includes("enter")) {
    text = text.replaceAll("enter", "a");
  }
  if (text.includes("imes")) {
    text = text.replaceAll("imes", "e");
  }
  if (text.includes("ai")) {
    text = text.replaceAll("ai", "i");
  }
  if (text.includes("ober")) {
    text = text.replaceAll("ober", "o");
  }
  if (text.includes("ufat")) {
    text = text.replaceAll("ufat", "u");
  }

  return text;
}

function verificarMinusculasCaracteres(text) {
  return /^[a-z\s]+$/.test(text);
}
