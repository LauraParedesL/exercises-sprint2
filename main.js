// EJERCICIO 1

const boton=document.getElementById("boton")
const cuadrado=document.getElementById("cuadrado")

boton.addEventListener("click",(event)=>{
     cuadrado.innerHTML = ""
    let esCeleste = cuadrado.classList.contains("bg-teal-400");
    let esRojo = cuadrado.classList.contains("bg-red-400");
    const nombreColor=document.createElement("h2")
    if (esCeleste) {
        cuadrado.classList.remove("bg-teal-400")
        nombreColor.textContent="Rojo"
        nombreColor.classList="flex justify-center font-bold"
        cuadrado.appendChild(nombreColor)
        return cuadrado.classList.add("bg-red-400")
    }

    if (esRojo) {
        cuadrado.classList.remove("bg-red-400")
        nombreColor.textContent="celeste"
        nombreColor.classList="flex justify-center font-bold"
        cuadrado.appendChild(nombreColor)
        return cuadrado.classList.add("bg-teal-400")
    }

    cuadrado.classList.add("bg-teal-400")
    nombreColor.textContent="celeste"
    nombreColor.classList="flex justify-center font-bold"
    cuadrado.appendChild(nombreColor)

})

// EJERCICIO 2

const inputTexto=document.getElementById("texto")
const divTexto=document.getElementById("cuadrado2")
const reset=document.getElementById("reset")

inputTexto.addEventListener("input", (event)=>{
   const textoAescribir=inputTexto.value 
   divTexto.textContent=textoAescribir
}
)

reset.addEventListener("click" , (event)=>{
    inputTexto.value= ""
    divTexto.textContent= ""
})

// EJERCICIO 3
const calcular=document.getElementById("submit")
const resultado=document.getElementById("resultado")
const calculadora=document.getElementById("calculadora")

calcular.addEventListener("click", (event)=>{
    event.preventDefault()
    const estatura = parseFloat(document.getElementById("estatura").value)
    const peso = parseFloat(document.getElementById("peso").value)

    let operacion = 0
    if (!isNaN(estatura) && !isNaN(peso)) {
        // Realizar el cálculo
        operacion = (estatura * estatura) / peso        
}
        resultado.value=operacion
})

// EJERCICIO 4

const convertir=document.getElementById("Convertir")
const borrar=document.getElementById("borrar")
const dolares=document.getElementById("dolares")


let tasaDeCambioPesos=500


 convertir.addEventListener("click", (event)=>{
   // event.preventDefault()
        const local= parseFloat(document.getElementById("local").value)
    if(!isNaN(local)){
        const equivalenteEnDolares= local / tasaDeCambioPesos
        dolares.value= equivalenteEnDolares
    }
     
})

convertir.addEventListener("click" , (event)=>{
const dolares= parseFloat(document.getElementById("dolares").value)
if (!isNaN(dolares)) {
    const equivalenteEnPesos= dolares * tasaDeCambioPesos
    local.value= equivalenteEnPesos
}
})

borrar.addEventListener("click" , (event)=>{
    const local=document.getElementById("local")
    local.value= ""
    dolares.value= ""
})




