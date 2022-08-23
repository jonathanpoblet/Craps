let miSuerte;

const boton=document.getElementById("botonDados");
const dado1=document.getElementById("dado1");
const dado2=document.getElementById("dado2");
const resultado=document.getElementById("resultado");


const arrojarDados=()=>{
    let d1=Math.round(Math.random()*5+1);
    let d2=Math.round(Math.random()*5+1);
    return [d1,d2];
}


boton.onclick=()=>{
    miSuerte=arrojarDados();
    dado1.value=miSuerte[0];
    dado2.value=miSuerte[1];
    let total=miSuerte.reduce((acc,dado)=>acc+dado,0);
    ((total==7)||(total==11)) ? resultado.innerText="Ganaste 100 dólares!!!" : resultado.innerText="Perdiste 20 dólares";
}

