//rescataremos todos los campos de tarjeta
let tarjeta = document.querySelector('#data-card')
let tar_v = tarjeta.querySelectorAll('input')
tar_v.forEach((input) =>{
    let res = ""
    res=input.value
    console.log(res)//.style.background="grey"
    //console.log(input.value)
   // console.log("input",input)
   // console.log("i",i)
})
/*tar_v.addEventListener('click', function(evento){
    evento.target.style.backgroundColor = "gray";
})*/

//console.log(tar_v)
//rescataremos todos los campos del usuario
let usuario = document.querySelectorAll('#data-user')
//rescataremos todos los campos de la direccion
let direccion = document.querySelectorAll('#data-direction')
//rescataremos todos los campos de pago
let pago = document.querySelectorAll('#Pay-message')