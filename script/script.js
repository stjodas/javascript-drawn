document.addEventListener('DOMContentLoaded', ()=>{

const pincel = {
    ativo:false,
    movendo:false,
    pos:{x:0, y:0},
    posAnteiror: null
}

const tela = document.querySelector('#tela');
const contexto = tela.getContext('2d')

tela.width = 700;
tela.height = 500;

contexto.lineWidth =7;
contexto.strokeStyle = "red";

const desenharLinha = (linha) => {

    contexto.beginPath();
    contexto.moveTo(linha.posAnteiror.x, linha.posAnteiror.y);
    contexto.lineTo(linha.pos.x, linha.pos.y);
    contexto.stroke();

}

tela.onmousedown = (evento) => {pincel.ativo = true};
tela.onmouseup = (evento) => {pincel.ativo = false};

tela.onmousemove = (evento)=> {
   pincel.pos.x = evento.clientX
   pincel.pos.y = evento.clientY

   pincel.movendo = true;
}

const ciclo = () => {
    if(pincel.ativo && pincel.movendo && pincel.posAnteiror){
        desenharLinha({pos:pincel.pos, posAnteiror: pincel.posAnteiror})
        pincel.movendo = false;
    }
    pincel.posAnteiror = {x:pincel.pos.x, y:pincel.pos.y}

    setTimeout(ciclo, 0);
}
    

ciclo();


})