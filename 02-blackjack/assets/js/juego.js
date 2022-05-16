
/**
 *  2C = Two of Clubs
 *  2D = Two of Diaminds
 *  2H = Two of Hearts
 *  2S = Two of Spades
 */

let deck = [];
const tipos = ["C","D","H","S"];
const especiales = ["A","J","Q","K"];


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
   // console.log (deck);
    
    return deck;
}

crearDeck();

//Esta funcion crea una carta

const pedirCarta = () => {

    if (deck.length ===0){

        throw "No hay cartas en el Deck";
    }
    carta= deck.pop()
    
    //console.log(carta);
    console.log(deck);
    return carta;
}
 

pedirCarta();

const valorCarta = ( carta ) =>{

    const valor = carta.substring(0, carta.length -1);
    console.log(valor);

    return (isNaN(valor)=== false)? valor*1 :
           (valor === "A")? 11 :
           10;
      /*
    let puntos = 0;

    if(isNaN( valor )){
        puntos = (valor=== "A" ) ? 11 :10;
        console.log(puntos);
    }else{
        puntos = valor * 1;
        console.log(puntos);
    }
*/

}

const valor = valorCarta( pedirCarta());
console.log({valor});

