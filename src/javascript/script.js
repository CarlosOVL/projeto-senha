function getcharttypes(){
    const maiuscula = document.querySelector('input#incluir_maiusculas').Checked
    const minuscula = document.querySelector('input#incluir_minusculas').Checked
    const numero = document.querySelector('input#incluir_numeros').Checked
    const especial = document.querySelector('input#incluir_caracteres_especial').Checked

    const chartypes = []

    if(maiuscula){
        chartypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }

    return chartypes

}

document.querySelector('button#gerar').addEventListener('click', function() {
    console.log(getcharttypes())
})