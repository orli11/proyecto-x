document.addEventListener('DOMContentLoaded', () =>{
    window.onload = function() {
        let diaSelect = document.getElementById('dia');
        let mesSelect = document.getElementById('mes');
        let anoSelect = document.getElementById('ano');

        for (var i = 1; i <= 31; i++) {
            diaSelect.innerHTML += `<option value="${i}">${i}</option>`;
        }

        let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        for (var i = 0; i < meses.length; i++) {
            mesSelect.innerHTML += `<option value="${i + 1}">${meses[i]}</option>`;
        }

        for (var i = 1940; i <= 2023; i++) {
            anoSelect.innerHTML += `<option value="${i}">${i}</option>`;
        }
    }
})