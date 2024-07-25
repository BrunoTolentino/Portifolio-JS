function carregar() {
    var mensagem= document.getElementById("mensagem")
    var data= new Date()
    var hora= data.getHours()
    var imagem = document.getElementById("img")
    mensagem.innerHTML= (`Agora são <strong>${hora}</strong> Horas!`)
    if (hora >=0 && hora < 12) {
        imagem.src= "imagens/foto-manha.jpg"
        document.body.style.background= 'rgb(221, 208, 26)'
    } else if (hora < 18) {
        imagem.src= "imagens/foto-tarde.jpg"
        document.body.style.background= 'rgb(224, 122, 26)'
    } else{
        imagem.src= "imagens/foto-noite.jpg"
        document.body.style.background= 'rgb(49, 48, 48)'
    }
}

    
   