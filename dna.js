function DNAPalabra (npalabra){
    let palabraNueva = "";
    for (let i = 0; i < npalabra.length; i++){
        if (npalabra[i] === "C" || npalabra[i] === "T" || npalabra[i] === "A" || npalabra[i] === "G"){
            palabraNueva += npalabra[i];
        }
    }
    return palabraNueva;

}

module.exports = DNAPalabra;