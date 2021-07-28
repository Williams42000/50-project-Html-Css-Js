

// On crée les "const" des éléments qui vont etre utilisé:
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

//On défini à 1 car notre liste de chiffre commence par le chiffre 1
let currentActive = 1

// Action lorsque l'on vas appuyer sur le bouton "next":
next.addEventListener('click', () =>{
    currentActive++
    
    // Si le chiffre doit etre inférieur ou = à la longueur de la barre donc pas pus haut que 4
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    // Pour lier la fonction update()
    update()
})


// Action lorsque l'on vas appuyer sur le bouton "prev":
prev.addEventListener('click', () =>{
    currentActive--
    
    // Si le chiffre doit etre supérieur à 1
    if (currentActive < 1) {
        currentActive = 1
    }
    
    // Pour lier la fonction update()
    update()
})



function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

    })
// On parametre la longueur de la barre bleu, elle doit touché chaque chiffre lorsque l'on appuie sur "Next" et "Prev"
const actives = document.querySelectorAll('.active')
// la syntaxe pour y arriver:
progress.style.width = (actives.length - 1 ) / (circles.length - 1 ) * 100 + '%'








//Pour faire apparaitre le bouton "prev" pour revenir à la page précedent et rendre inaccessible le bouton "next lorsque l'on arrive au bout" et vice-versa
if(currentActive===1) {
    prev.disabled = true
} else if(currentActive === circles.length){
    next.disabled = true
} else {
    prev.disabled = false
    next.disabled = false
}

}

