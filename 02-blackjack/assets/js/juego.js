
/**
 *  2C = Two of Clubs
 *  2D = Two of Diaminds
 *  2H = Two of Hearts
 *  2S = Two of Spades
 */

let deck = [];
const tipos = ["C","D","H","S"];
const especiales = ["A","J","Q","K"];

let puntosJugador = 0,
    puntosComputadora = 0;

//Referencis de Html

const btnPedir =document.querySelector("#BtnPedir");
const puntosHTML =document.querySelectorAll("small");
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

//Esta Funcion crea un nuevo deck
const crearDeck= ( ) => {

    for ( let i = 2; i<= 10; i++){
        for( let tipo of tipos){
            deck.push( i + tipo);
        }
    }
    for (let tipo of tipos){
        for( let esp of especiales){
            deck.push(esp + tipo);
        }
    }
    //console.log (deck);
    deck = _.shuffle(deck);
    console.log (deck);
    
    return deck;
}

crearDeck();

//Esta funcion crea una carta

const pedirCarta = () => {

    if (deck.length ===0 ){

        throw "No hay cartas en el Deck";
    }
    const carta= deck.pop()
    
    //console.log(carta);
    //console.log(deck);
    return carta;
}
 

//pedirCarta();

const valorCarta = ( carta ) =>{

    const valor = carta.substring(0, carta.length -1);
    //console.log(valor);

    return (isNaN(valor) ) ? 
           (valor === "A")? 11 : 10
           : valor *1;
}

//Turno de la computadora

const turnoComputadora = ( puntosMinimos)=> {

do{
    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;
    console.log( puntosComputadora);

//img class="carta " src="assets/cartas/3C.png" alt="">

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add( "carta" );
    divCartasComputadora.append( imgCarta)

}while(  puntosComputadora < puntosMinimos     );

}




// Eventos

btnPedir.addEventListener("click", () => {

const carta = pedirCarta();
puntosJugador = puntosJugador + valorCarta(carta);
puntosHTML[0].innerText = puntosJugador;
console.log( puntosJugador);

//img class="carta " src="assets/cartas/3C.png" alt="">

const imgCarta = document.createElement("img");
imgCarta.src = `assets/cartas/${carta}.png`;
imgCarta.classList.add( "carta" );
divCartasJugador.append( imgCarta)


if ( puntosJugador > 21 ){
    console.warn("Lo siento mucho, perdiste");
    btnPedir.disabled = true;

} else if (puntosJugador===21){

    btnPedir.disabled = true;


}



});

//TOD0: BORRAR
console.log(  )
turnoComputadora( 12 );