function validarFormulario(){
    let nombre = document.getElementById('nombre').value
    let email = document.getElementById('email').value
    let contacto = document.getElementById('contacto').value

    if(nombre === "" || email === "" || contacto === ""){
        alert("Todos los campos son OBLIGATORIOS")
        return false
    }

    return true
}