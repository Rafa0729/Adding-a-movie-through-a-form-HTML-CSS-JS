window.addEventListener("load", () => {
  "Use strict"

  // USADO PARA COMPROBAR QUE NUESTRO NAVEGADOR FUNCIONA CON EL LOCAL STORAGE
  // if(typeof(Storage) !== "undefined" ){
  //   console.log("The localStorage is available");
  // } else {
  //   alert("Incompatible con localStorage");
  // }
//--------------- FORMULARIO SHOW AND HIDE
  const upArrow = document.querySelector("#upArrow");
  const downArrow = document.querySelector("#downArrow");

  //Mostrar el Formulario
  upArrow.addEventListener("click", () => {
      formulario.style.top = "40%";
  });

  //Ocultar el formulario
  downArrow.addEventListener("click", () => {
      formulario.style.top = "calc(100% - 4em)";
  });

//----------------

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault

    console.log("Hey! Yes, I'm working");

    var peliculasList = document.querySelector(".peliculas-list");
    var titulo = document.querySelector("#titulo");
    var director = document.querySelector("#director");
    var genero = document.querySelector("#genero");
    var ano = document.querySelector("#ano");

    function creatingPeliculaItem() {
        //First of all, we need to create the div tag with the pelicula item class
        var div = document.createElement("div");
        div.setAttribute("class", "pelicula-item");
        peliculasList.append(div);

        //Secondly, we need to add the img tag with the src attribute
        var img = document.createElement("img");
        img.setAttribute("src", "tiger-optimized.jpg");

        //Secondly, we need to create the h3 tag
        var h3 = document.createElement("h3");
        h3.append(titulo.value);

        //Then we need to create the p element and add the director
        var directorP = document.createElement("p");
        directorP.append(director.value.toLowerCase());

        // After that, we need to create other p element with the genero
        var generoP = document.createElement("p");
        generoP.append(genero.value.toLowerCase());

        //Finally, create the p element with the año
        var anoP = document.createElement("p");
        anoP.append(ano.value);

        //Append all the items to peliculasList
        div.append(img);
        div.append(h3);
        div.append(directorP);
        div.append(generoP);
        div.append(anoP);

        titulo.value = "";
        director.value = "";
        genero.value = "";
        ano.value = "";
    }
    creatingPeliculaItem();
});

d


});
