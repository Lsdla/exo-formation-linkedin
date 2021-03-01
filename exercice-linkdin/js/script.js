let pageContent = document.getElementById('pageContent');
let pictInfo = document.getElementById('pictInfo');
let images = ["nasser", "Lyes", "farid", "fabio", "kamel"];

// pour faire le random des images:
let randomImages = images[Math.floor(Math.random()*images.length)];
console.log(randomImages);


// écouteur d'événement 

window.addEventListener('load', () =>{ // load est l'événement qui qui se déclanche au chargement de la page
    alert('page chargée !')
    console.log(window.location);
});

let galImages = document.querySelectorAll('#GalleryImages img');

for (let i = 0; i< galImages.length; i++){
    let image = galImages[i];
    image.addEventListener('click', () => {alert (' bonjour')}); // ici on a utilisé une fonction à flèche
    image.addEventListener('click', function() { 
        alert (' Au revoir !')
    }) // deuxième manière d'écrire une fonction 

    image.addEventListener('click', showSinglePict);
}



// console.log(galImages); on va le remplacer par une fonction 
// pour info la méthode toggle() ( fait exactement comme sa signification en anglais: allumer si c'est éteint et éteindre si c allumé)

function showSinglePict(event){
   let image = event.target;
   let imageContainer = document.getElementById('galleryContainer');
   let bigImage = imageContainer.querySelector('img');
   bigImage.src = image.src;
   imageContainer.classList.toggle('visible');
   imageContainer.addEventListener('click', closeSinglePict); // permet de fermer la grande image au click, création de la fonction close ci-dessous
}

function closeSinglePict(){
    let imageContainer = document.getElementById('galleryContainer');
    imageContainer.classList.toggle('visible');
}


