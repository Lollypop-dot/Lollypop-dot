window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__burger').addEventListener('click', function() {
        document.querySelector('#burger__content').classList.toggle('is-active')
    })
})