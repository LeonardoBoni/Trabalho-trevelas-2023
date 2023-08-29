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



function compressor1(){
    window.location.href = 'compressor1.html'
}

function compressor2(){
    window.location.href = 'compressor2.html'
}

var txt = window.document.getElementsByClassName('texto-corpo-compressor');
const estado = 0;


function receba(){
    txt.innerHTML = `<p class="texto-corpo-compressor">°O compressor está ${estado} </p>`
}
