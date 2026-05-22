const elementoForm = document.getElementById('formulario');

elementoForm.addEventListener('submit', (e) => e.preventDefault());

const elementCor = document.getElementById('cor');
elementCor.addEventListener('input', (e ) => {
    let corNova = e.target.value;

    localStorage.setItem('primaryColor', corNova);

    document.documentElement.style.setProperty('--primary-color', corNova);
});




document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('primaryColor')){

        elementCor.value = localStorage.getItem
        ('primaryColor');
        document.documentElement.style.setProperty('--primary-color', elementCor.value);
    }else {
        const rootStyles = window.getComputedStyle(document.documentElement);

        const primaryColor = rootStyles.getPropertyValue
        ('--primary-color').trim();

        elementCor.value = primaryColor;

    }
})