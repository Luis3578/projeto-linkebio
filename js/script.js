const elementoOculto = document.querySelectorAll('.oculto')

const observarElmento = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel')
        }
    })
})


elementoOculto.forEach((element) => {
    observarElmento.observe(element)
})
