

function calcular() {
    var txtNum= document.getElementById("iNum")
    var num1= Number(txtNum.value)
    var numR= 1
    var res= document.getElementById("res")
    res.style.display= "block"
    res.innerHTML=(`<p>Tabuada do<strong> ${num1}</strong>: </p>`)
    for (i=1; i<=10; i++) {
        numR= num1 * i
        res.innerHTML+=`<p> ${num1} X ${i} = ${numR}`
    }
}