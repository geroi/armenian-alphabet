window.addEventListener("load", ()=>{
    document.querySelectorAll('.hint-button').forEach((element)=>{
        element.addEventListener("click", ()=>{
            let target = document.querySelector(".hint-text[data-id='"+ element.dataset.id + "']")
            target.classList.remove('d-none')
        })
    })

    document.querySelectorAll('.input').forEach((input)=>{
        input.addEventListener('input', (event)=>{
            if (event.target.value !== '' && event.target.validity.valid) {
                event.target.classList.add('is-valid')
            } else {
                event.target.classList.remove('is-valid')
            }
        })
    })
})
