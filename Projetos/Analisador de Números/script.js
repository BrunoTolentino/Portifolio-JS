let num = []
let show = document.getElementById('show')
let res =  document.getElementById('res')

function adicionar() {
    let inum = Number(document.getElementById('inum').value)
    if(inum < 1 || inum > 100) {
       alert("Número inválido!")
    } else if(num.indexOf(inum) !== -1){
        alert(`Valor ${inum} já existe na lista.`)
    }
    else{
        show.innerHTML += (`<p>${inum}</p>`)
        num.push(inum)
        res.innerHTML=(`<input type="button" value="Analisar" onclick="analisar()"></input><input type="button" value="Limpar Dados" onclick="limpar()">`)
    }
}
function analisar() {
    if(num.length < 1) {
        alert("Adicione algum número!")
    } else {
        num.sort((a, b) => a - b)
        let max = num[0];
        for (let i = 1; i < num.length; i++) {
            if (num[i] > max) {
                max = num[i];
            }
        }
        //
        let soma = 0
        for(i=0; i < num.length; i++) {
            soma += num[i]
        }

        //
        let media = 0
        media = soma / num.length
        res.innerHTML=(`<input type="button" value="Analisar" onclick="analisar()"></input> <input type="button" value="Limpar Dados" onclick="limpar()">`)
        res.innerHTML+=(`<p> Ao todo temos <strong> ${num.length}</strong> números cadastrados!</p>`)
        res.innerHTML+=(`<p> O menor número cadastrado é: <strong>${num[0]}</strong>!`)
        res.innerHTML+=(`<p> O maior número cadastrado é: <strong>${max}</strong>!`)
        res.innerHTML+=(`<p> O valor somado de todos os números cadastrados é: <strong>${soma}</strong>!`)
        res.innerHTML+=(`<p> O valor da média de todos os números cadastrados é: <strong>${media}</strong>!`)
        }
}
function limpar() {
    num = []
    res.innerHTML=(`<input type="button" value="Analisar" onclick="analisar()"></input> <input type="button" value="Limpar Dados" onclick="limpar()">`)
    show.innerHTML=(" Os números adicionados aparecerão aqui:")
}