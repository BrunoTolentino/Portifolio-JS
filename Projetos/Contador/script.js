function contar() {
    //variáveis para armazenar o texto dos inputs do usuário
    var txtNum= document.getElementById("iTxtNum")
    var txtNumf= document.getElementById("iTxtNumF")
    var txtNump= document.getElementById("iTxtNumP")
    var res= document.getElementById("res")
    res.innerHTML=(`<strong>Resultado:</strong>`)
        
        //variáveis para guardar os valores numéricos dos inputs do usuário
        var num1= Number(txtNum.value)
        var numf= Number(txtNumf.value)
        var nump= Number(txtNump.value)
        //Lógica da contagem
        if(nump === 0){  
            alert("Não é possível contar a passo 0!")
        }
        else if (num1 <numf) { //Caso em que o número inicial é maior do que o final
            for(i=num1;i<=numf;i=i+nump) { //Contagem para "frente", somando.
                //Mostrando o resultado na Div#res
                res.innerHTML+=`&#128070; ${i} `
            }
        } else if(num1 > numf) { //Caso em que o número inicial é maior do que o final
            for(i=num1;i>=numf;i=i-nump) { //Contagem para "trás", subtraindo.
                //Mostrando o resultado na Div#res
                res.innerHTML+=`&#128070; ${i} `
            }
        } else{  //Caso em que os números inicial e final são iguais. Não há contagem.
            alert("Não é possível realizar uma contagem a partir de dois números iguais ou indefinidos!")
        }
        res.innerHTML+=`👌`
}
