

let stockS = 5;
let stockM = 3;
let stockL = 0;
let continuar = true;
let talle;

function verificarTalle(talle) {
    while(continuar === true){
        talle = prompt("Ingrese el talle de la prenda (S, M o L)").toUpperCase();
        while (talle !== "S" && talle !== "M" && talle !== "L"){
            console.log("Ingrese el talle de la prenda (S, M o L)");
            talle = prompt("Por favor, ingrese solamente S, M o L)");
            talle = talle.toUpperCase();}
            if (talle == "S" && stockS > 0){
                stockS--;
                console.log("Se agrego al carrito campera talle S");
            }
            else if (talle == "M" && stockM > 0){
                stockM--;
                console.log("Se agrego a carrito la campera talle M");
                
            }
            else if (talle == "L" && stockL > 0){
                stockL--;
                console.log("Se agrego al carrito la campera talle L");
            } else{
                console.log("No queda Stock");
            }
            continuar = confirm(`Deseas continuar comprando?`)
            
    }
}

verificarTalle(talle)

