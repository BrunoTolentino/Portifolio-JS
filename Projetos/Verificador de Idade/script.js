function verificar() {
    var data= new Date() //Recebe a data do sistema
    var ano= data.getFullYear()  //aloca o ano completo da data
    var fano= document.getElementById('iTxtAno')  //Recebe o ano, em formato de texto, do formulário HTML
    var res= document.getElementById('res') //Atribui a div que mostra o resultado a uma variável
    if (fano.value.length == 0 || fano.value > ano){ //Valida os dados inseridos
        window.alert("Dados incorretos!")
    } else {
        var fsex = document.getElementsByName("radSexo") //Atribui a uma variável o valor marcado em M/F
        var idade = ano - Number(fano.value) //Realiza o calculo da idade, e atribui a uma variável
        var genero = '' //Declara uma variável de gênero
        var img = document.createElement('img') //Criando a tag da imagem via JS
        img.setAttribute('id', 'pic')  //Atribuindo uma ID a essa tag via JS
        if ( fsex[0].checked){ //Checa qual valor marcado e atribui a variável de gênero
            genero =  'Homem'
            if (idade >= 0 && idade <16) {
                img.setAttribute('src' , 'bebe-homem.jpg')
            } else if(idade <22) {
                img.setAttribute('src' , 'jovem-homem.jpg')
            } else if (idade <50) {
                img.setAttribute('src' , 'adulto-homem.jpg')
            } else{
                img.setAttribute('src' , 'idoso-homem.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <16) {
                img.setAttribute('src' , 'bebe-mulher.jpg')
            } else if(idade <22) {
                img.setAttribute('src' , 'jovem-mulher.jpg')
            } else if (idade <50) {
                img.setAttribute('src' , 'adulto-mulher.jpg')
            } else{
                img.setAttribute('src' , 'idoso-mulher.jpg')
            }
        }
    res.style.textAlign =  'center'
    res.innerHTML= `<p>Detectamos <strong>${genero}</strong> com <strong> ${idade}</strong> anos.</p>`
    res.appendChild(img)
    }
}