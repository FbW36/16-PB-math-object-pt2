let hex = "0123456789ABCDEF"

function randomhexfunc(){
    let X = hex.charAt(Math.random() * hex.length);
    return X;
}

let randomhex = `#${randomhexfunc()}${randomhexfunc()}${randomhexfunc()}${randomhexfunc()}${randomhexfunc()}${randomhexfunc()}`

console.log(randomhex.toString(16));

