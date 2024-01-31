document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn-platforms');

    const elementPlatforms = document.querySelector('.btn-platforms .platforms');

    button.addEventListener('click', () => {
        elementPlatforms.classList.toggle('ativo')
    });
})
