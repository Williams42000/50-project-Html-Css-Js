// 1 - Placer les boutons à basculer avec (querySelectorAll)
// 2 - Parcours la liste de chaque élements de la liste (forEach)
// 3 - Ajouter un click et sont événements (addEventListener)
// 4 - Basculer la class active sur les différents parents (.parentNode & classList.toggle())

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach((toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
}))