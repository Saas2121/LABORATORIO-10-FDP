const Contendorimg = document.getElementById(`Contendorimg`);
const efe = document.getElementById(`efe`);
const efes = document.getElementById(`efes`);


let mapBanner = {posterPelicula:"Casap.jpg",
                nombrePelicula:"Money Money", 
                rating:"(4.5 Rating)", 
                sinopsis:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus facere impedit earum accusantium distinctio omnis temporibus similique esse doloribus dolorem? Repudiandae magni autem eligendi corporis?",
                categoria:"+22"
};

console.log(mapBanner["categoria"]);

Contendorimg.innerHTML += `<div id="letras">
<div class="variableImagen"><img src="img/${mapBanner["posterPelicula"]}"></div>
<div class="arreglo">
    <h2>${mapBanner["nombrePelicula"]}</h2>
    <h5>${mapBanner["rating"]}</h5>
</div>
<p>${mapBanner["sinopsis"]}<p>
<div class="final">
    <input id="crear" type="submit" value="PLAY">
    <input id="crear" type="submit" value="SAVE">
    <h4>${mapBanner["categoria"]}</h4>
</div>
</div>`

let pelicula0 = {posterPelicula:"Primeras.jpg", categoria:"+15", rating:"1S.png"};
let pelicula1 = {posterPelicula:"telefono.jpg", categoria:"+18", rating:"2S.png"};
let pelicula2 = {posterPelicula:"fall.jpg", categoria:"+12", rating:"3S.png"};
let pelicula3 = {posterPelicula:"fightclub.jpg", categoria:"+1", rating:"4S.png"};
let pelicula4 = {posterPelicula:"interstellar.jpg", categoria:"+11", rating:"1S.png"};
let pelicula5 = {posterPelicula:"intime.jpg", categoria:"+5", rating:"5S.png"};
let pelicula6 = {posterPelicula:"minions.jpg", categoria:"+2", rating:"5S.png"};
let pelicula7 = {posterPelicula:"nope.jpg", categoria:"+15", rating:"1S.png"};
let Recomendaciones  = [pelicula0, pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6, pelicula7];

for(let i=0 ; i<Recomendaciones.length ; i++){
    efe.innerHTML += `<div class="modulo1">
    <img class="imgf" src="img/${Recomendaciones[i].posterPelicula}">
    <div class="imagenI">
        <p>${Recomendaciones[i].categoria}</p>
        <input id="save" type="submit" value="Play">
        
    </div>
    <div class="rating">
        <p>Rating:</p>
        <img class="estrellas" src="img/${Recomendaciones[i].rating}">
        <img class="guarda" src="img/guarda.png">
    </div>
</div>`
}

let trending0 = {posterPelicula:"Primeras.jpg", categoria:"+15", rating:"1S.png"};
let trending1 = {posterPelicula:"antman.jpg", categoria:"+28", rating:"2S.png"};
let trending2 = {posterPelicula:"antman2.jpg", categoria:"+148", rating:"4S.png"};
let trending3 = {posterPelicula:"creed.jpg", categoria:"+15", rating:"4S.png"};
let trending4 = {posterPelicula:"creed2.jpg", categoria:"+11", rating:"3S.png"};
let trending5 = {posterPelicula:"dc.jpg", categoria:"+5", rating:"5S.png"};
let trending6 = {posterPelicula:"dragonball.jpg", categoria:"+22", rating:"5S.png"};
let trending7 = {posterPelicula:"dragonball1.jpg", categoria:"+15", rating:"5S.png"};
let Trending  = [trending0, trending1, trending2, trending3, trending4, trending5, trending6, trending7];

for(let a=0 ; a<Trending.length ; a++){
    efes.innerHTML += `<div class="modulo1">
    <img class="imgf" src="img/${Trending[a].posterPelicula}">
    <div class="imagenI">
        <p>${Trending[a].categoria}</p>
        <input id="save" type="submit" value="Play">
    </div>
    <div class="rating">
        <p>Rating:</p>
        <img class="estrellas" src="img/${Trending[a].rating}">
        <img class="guarda" src="img/guarda.png">
    </div>
</div>`
}