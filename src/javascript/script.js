function getcharttypes(){
    const maiuscula = document.querySelector('input#incluir_maiusculas').Checked
    const minuscula = document.querySelector('input#incluir_minusculas').Checked
    const numero = document.querySelector('input#incluir_numeros').Checked
    const especial = document.querySelector('input#incluir_caracteres_especial').Checked

    const chartypes = [];

    if(maiuscula){
        chartypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if(minuscula){
        chartypes.push('abcdefghijklmnopqrstuvwxyz');
    }

    if(numero){
        chartypes.push('0123456789');
    }

    if(especial){
        chartypes.push('*!?$#%¨&()_-=+/|\\""\'.,;:`{}[]@');
    }
    
    return chartypes;
}

function randomCharType(chartypes){
    const randomIndex =  Math.floor(Math.random() * chartypes.length)
    
    return chartypes[randomIndex][Math.floor(Math.random() * chartypes[randomIndex].length)]
}

document.querySelector('button#gerar').addEventListener('click', function() {
    console.log(randomCharType(getcharttypes()))
})