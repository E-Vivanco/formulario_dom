//rescataremos todos los campos de tarjeta
let tarjeta = document.querySelector('#data-card')
//console.log(tarjeta.children[0].children[0].children[0].children[0])
let tar_v1 = tarjeta.children[0].children[0].children[0].children[0]
//console.log("aqui val tar_v1",tar_v1.value)
//tar_v1.addEventListener('click',function(){
//    cambia(tar_v1)
//})
let tar_v2 = tarjeta.children[0].children[1].children[0].children[0]
//tar_v2.addEventListener('click',function(){
//    cambia(tar_v2)
//})
//console.log("aqui val tar_v2",tar_v2.value)
let tar_v3 = tarjeta.children[0].children[2].children[0].children[0]
//tar_v3.addEventListener('click',function(){
//    cambia(tar_v3)
//})
function cambia(val){
    val.style.background = "grey"
}
function cambia2(val){
    val.style.color ="grey"
}
function cambia3(val){
    val.style.color = "grey"
    tar_v1.style.background = "#F0808063"
    tar_v2.style.background = "#F0808063"
    tar_v3.style.background = "#F0808063"
    us_1.style.background = "#F0808063"
    us_2.style.background = "#F0808063"
    dir_1.style.background = "#F0808063"
    dir_2.style.background = "#F0808063"
    dir_3.style.background = "#F0808063"
    pago_1.style.background = "#F0808063"
}




//rescataremos todos los campos del usuario
let usuario = document.querySelector('#data-user')
//console.log(usuario.children[0].children[0].children[0].children[0])
let us_1 = usuario.children[0].children[0].children[0].children[0]
//    us_1.addEventListener('click',function(){
//        cambia(us_1)
//    })
//console.log(us_1)
let us_2 = usuario.children[0].children[1].children[0].children[0]
  //  us_2.addEventListener('click',function(){
  //      cambia(us_2)
  //  })
//console.log(us_2)

//rescataremos todos los campos de la direccion
let direccion = document.querySelector('#data-direction')
let dir_1= direccion.children[0].children[0].children[0].children[0]
    //dir_1.addEventListener('click',function(){
    //    cambia(dir_1)
    //})
//console.log(dir_1)
let dir_2= direccion.children[0].children[1].children[0].children[0]
    //dir_2.addEventListener('click',function(){
    //    cambia(dir_2)
    //})
let dir_3= direccion.children[0].children[2].children[0].children[0]
    //dir_3.addEventListener('click',function(){
    //    cambia(dir_3)
    //})

//rescataremos todos los campos de pago
let pago = document.querySelector('#Pay-message')
//aqui tenemos check-radio de tarjetas + iconos
//console.log(pago.children[0].children[0].children[0].children[0])

//aqui esta text de mensaje
let pago_1=pago.children[0].children[1].children[0].children[0]
   // pago_1.addEventListener('click',function(){
   //     cambia(pago_1)
   // }) 
//console.log(pago.children[0].children[1].children[0].children[0])
//seleccionamos botones enviar - aceptar
let botones = document.querySelector('#footer')
let bot_1 =botones.children[0].children[0].children[0].childNodes[1]
    bot_1.addEventListener('click',function(){
        cambia3(bot_1)
    })
    //console.log("Aceptar",bot_1)
let bot_2 =botones.children[0].children[0].children[0].childNodes[3]
    bot_2.addEventListener('click',function(){
        cambia2(bot_2)
    })
    //console.log("Cancelar",bot_2)




