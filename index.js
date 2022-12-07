//rescataremos todos los campos de tarjeta
let tarjeta = document.querySelector('#data-card')
//console.log(tarjeta.children[0].children[0].children[0].children[0])
let tar_v1 =tarjeta.children[0].children[0].children[0].children[0]
//console.log("aqui val tar_v1",tar_v1.value)
tar_v1.addEventListener('click',function(){
    cambia()
})
let tar_v2 =tarjeta.children[0].children[1].children[0].children[0]
tar_v2.addEventListener('click',function(){
    cambia()
})
//console.log("aqui val tar_v2",tar_v2.value)
let tar_v3 =tarjeta.children[0].children[2].children[0].children[0]
tar_v2.addEventListener('click',function(){
    cambia()
})


//console.log(tar_v)
//rescataremos todos los campos del usuario
let usuario = document.querySelectorAll('#data-user')
//rescataremos todos los campos de la direccion
let direccion = document.querySelectorAll('#data-direction')
//rescataremos todos los campos de pago
let pago = document.querySelectorAll('#Pay-message')