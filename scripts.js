const modal_overlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')
const modal_materials = document.querySelector('.modal_materials')
const iframe_content = document.querySelector('.iframe_content')

for(let card of cards){
    card.addEventListener("click", function(){
        const card_id = card.getAttribute('id')
        modal_overlay.classList.add('active')
        iframe_content.src = `https://blog.rocketseat.com.br/${card_id}`
    })
}

const close_modal = modal_materials.querySelector('#close')
const maximize_modal = modal_materials.querySelector('#maximize')
const minimize_modal = modal_materials.querySelector('#minimize')

close_modal.addEventListener("click", function(){
    modal_overlay.classList.remove('active')
    iframe_content.src = ""
    const maximized = modal_materials.classList.contains('maximize')
    if(maximized){
        modal_materials.classList.remove('maximize')
        iframe_content.classList.remove('maximize')
    }
})

maximize_modal.addEventListener("click", function(){
    const maximized = modal_materials.classList.contains('maximize')
    if(!maximized){
        modal_materials.classList.add('maximize')
        iframe_content.classList.add('maximize')
    }
})

minimize_modal.addEventListener("click", function(){
    const maximized = modal_materials.classList.contains('maximize')
    if(maximized){
        modal_materials.classList.remove('maximize')
        iframe_content.classList.remove('maximize')
    }
})
