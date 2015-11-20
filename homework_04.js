function dec2bin(n){
    var binario = [];   
    var resto = 0;
        for(var i = n; i > 0; i = Math.floor(i / 2)){
            resto = i % 2;
            binario.unshift(resto);
        }
        return binario.join("");
}