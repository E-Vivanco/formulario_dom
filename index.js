//rescataremos todos los campos de tarjeta
let tarjeta = document.querySelector('#data-card')
//console.log(tarjeta.children[0].children[0].children[0].children[0])
let tar_v1 =tarjeta.children[0].children[0].children[0].children[0]
console.log(tar_v1)
let tar_v2 = tar_v1.querySelectorAll('input')
tar_v2.forEach((input) =>{
    let res = []
    res.push(input.value)//replace("/\s+/",","))
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