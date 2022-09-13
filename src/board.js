//objeto con informacion importante sobre el juego 
let informacionTablero = {
    ganador:null,
    jugadorActual: "player1",
    contador:{
        "player1":0,
        "player2":0,
    },
    accionAnterior: null,
    obtenerOtroJugador: function(){
        return this.jugadorActual === "player2" ? "player1" : "player2"
    }
};

// accediento a los elementos por medio del ID 
let resetButton = document.getElementById("reset");
let rockAction = document.getElementById("rockAction");
let paperAction = document.getElementById("paperAction");
let scissorsAction = document.getElementById("scissorsAction");

function cambioDeTurno() {
    informacionTablero.jugadorActual = informacionTablero.obtenerOtroJugador();
    mostrarJugadorActual();
}

function mostrarJugadorActual(){
    document.getElementById(informacionTablero.jugadorActual).classList.add("active");
    document.getElementById(informacionTablero.obtenerOtroJugador).classList.remove("active")
}

function hacerAccion(accion) {
    if(informacionTablero.ganador) {
        alert("Reinicie el juego porque ya hay un ganador en esta partida.")
        return;
    }
    

    if(informacionTablero.jugadorActual === "player1") {
        informacionTablero.accionAnterior = accion;
        cambioDeTurno();
        return;
    }
// Desestructuracion 

    let { accionAnterior } = informacionTablero;

    //condiciones de jugabilidad 

    if(accion === "rock" && accionAnterior === "paper") {
        informacionTablero.contador["player1"] += 1
    }
    else if(accion === "rock" && accionAnterior === "scissors") {
        informacionTablero.contador ["player2"] += 1
    }
    else if(accion === "paper" && accionAnterior === "rock") {
        informacionTablero.contador ["player2"] += 1
    }
    else if(accion === "paper" && accionAnterior === "scissors") {
        informacionTablero.contador ["player1"] += 1
    }
    else if(accion === "scissors" && accionAnterior === "rock") {
        informacionTablero.contador ["player1"] += 1
    }
    else if(accion === "scissors" && accionAnterior === "paper") {
        informacionTablero.contador ["player2"] += 1
    } else {
        alert("No hay ningun punto en este turno")
    }
     
    for(jugador in informacionTablero.contador){
        if(informacionTablero.contador[jugador] > 1){
            informacionTablero.ganador = jugador;
            alert(`gracias ${jugador} Ganaste  `)
        }
    }
    informacionTablero.accionAnterior= null;
    cambioDeTurno();
}

rockAction.addEventListener("click", () => hacerAccion("rock"));
paperAction.addEventListener("click", () => hacerAccion("paper"));
scissorsAction.addEventListener("click", () => hacerAccion("scissors"));
reset.getElementById

function reset (){
    document.getElementById("reset")
}