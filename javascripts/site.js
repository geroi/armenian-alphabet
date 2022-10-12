window.addEventListener("load", ()=>{
    document.querySelectorAll('.hint-button').forEach((element)=>{
        element.addEventListener("click", ()=>{
            let target = document.querySelector("input[data-id='"+ element.dataset.id + "']")
            target.value = target.pattern;
            target.dispatchEvent(new Event('input'));
        })
    })

    document.querySelectorAll('.input').forEach((input)=>{
        input.addEventListener('input', (event)=>{
            const validationRegex = new RegExp(event.target.pattern, 'i')
            if (event.target.value !== '' && validationRegex.test(event.target.value)) {
                event.target.classList.add('is-valid')
            } else {
                event.target.classList.remove('is-valid')
            }
        })
    })
})
