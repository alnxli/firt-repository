const meuNome = "alisson lima"
const resultado = "resultado da soma: "

const numero1 = 5
const numero2 = 7 

let soma
let multi

soma = numero1 + numero2 
multi = numero1 * numero2

//alert(meuNome + soma)
//console.log("resultado da multi: ", multi)


//let sorvete = "morango"

//if(sorvete == "chocolate") {
    //alert("sim, eu amo sorvete de chocolate");
//}
//else if (sorvete == "morango"){
    //alert("eu gosto de morango")
//}
//else{
    //alert("aaah, mas chocolate é o meu favorito...");
//}

function sub(nmr1, nmr2){
    if(nmr1 > nmr2){
        let resultado = nmr1 - nmr2
        console.log(nmr1 + "-" + nmr2 + "=" + resultado)
    }
   else{
    console.log("não foi possível subtrair " + nmr2 + " de " + nmr1)
   }
}

sub(6, 3)
sub(3, 8)

function div(nmr1, nmr2){
    if(nmr1 > nmr2){
        let resultado = nmr1 / nmr2
        console.log(nmr1 + " / " + nmr2 + " = " + resultado)
    }
   else{
    console.log("não foi possível dividir " + nmr2 + " de " + nmr1)
   }
}

div(10, 5)
div(0, 3)



let maca = {
    nome: "maçã",
    cor: "vermelha",
    peso: 10,
    tipo: "fruta"
}

let alface = {
    nome: "alface",
    cor: "verde",
    peso: 0.5,
    tipo: "verdura"
}

let alimentos = [maca, alface];



//alimentos.push(maca)
//alimentos.push(alface)

//console.log(alimentos)
//console.log(alimentos[1].tipo, alimentos[1].cor, alimentos[1].peso, alimentos[1].nome)

alimentos.forEach(al => {
    console.log(al.cor)
})