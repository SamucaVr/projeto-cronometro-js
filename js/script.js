function ativarContagem() {
    tempo = setInterval(function () {
        const horas = document.getElementById('horas').innerHTML;
        const minutos = document.getElementById('minutos').innerHTML;
        const segundos = document.getElementById('segundos').innerHTML;
        
        let hora = parseInt(horas) + 1;
        let minuto = parseInt(minutos) + 1;
        let segundo = parseInt(segundos) + 1;

        document.getElementById('segundos').innerHTML = segundo;
        document.getElementById('display').innerHTML = 'Iniciado';

        if (segundo == 60) {
            document.getElementById('segundos').innerHTML = 0;
            document.getElementById('minutos').innerHTML = minuto;
            if (minuto == 60) {
                document.getElementById('minutos').innerHTML = 0;
                document.getElementById('horas').innerHTML = hora;
            }
        }
    }, 1000);
}

function pararContagem() {
    clearInterval(tempo);
    document.getElementById('display').innerHTML = 'Parou';
}

function zerarContagem() {
    document.getElementById('horas').innerHTML = 0;
    document.getElementById('minutos').innerHTML = 0;
    document.getElementById('segundos').innerHTML = 0;
    document.getElementById('display').innerHTML = '';
}