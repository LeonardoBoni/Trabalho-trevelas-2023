const zeroFill = n => {
    return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
    const now = new Date();

    const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

    document.getElementById('data-hora').innerHTML = dataHora;
}, 1000);

const options = {
	timeZone: 'America/Sao_Paulo',
	hour: 'numeric',
	minute: 'numeric'
};


function home(){
    window.location.href = "index.html"
}



function compressor1() {

    window.location.href = 'compressor1.html';
}


const estadocompressor1 = "LIGADO";
const tempoestado1 = 10;
const pressao1 = 100;
const umidadee1 = 50;
var estado1 = document.getElementById('estado');
var tempo1 = document.getElementById('tempo');
var press1 = document.getElementById('pressao');
var umidade1 = document.getElementById('umidade');

function refresh(){
    estado1.innerHTML = `${estadocompressor}`;
    tempo1.innerHTML = `${tempoestado}`;
    press1.innerHTML = `${pressao}`;
    umidade1.innerHTML = `${umidadee}`
}

function compressor2() {

    window.location.href = 'compressor2.html';
}


const estadocompressor2 = "LIGADO";
const tempoestado2 = 10;
const pressao2 = 100;
const umidadee2 = 50;
var estado2 = document.getElementById('estado');
var tempo2 = document.getElementById('tempo');
var press2 = document.getElementById('pressao');
var umidade2 = document.getElementById('umidade');

function refresh(){
    estado2.innerHTML = `${estadocompressor2}`;
    tempo2.innerHTML = `${tempoestado2}`;
    press2.innerHTML = `${pressao2}`;
    umidade2.innerHTML = `${umidadee2}`
}




