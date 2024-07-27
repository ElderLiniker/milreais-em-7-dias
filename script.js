

const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".segunda-mascara ")


function cliqueinobotao(){
form.style.left = "50%"
form.style.transform = "translateX(-50%)"
mascara.style.visibility = "visible"}


function reverter(){
    mascara.style.visibility = "hidden"
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    
}




/*formcarry-  */