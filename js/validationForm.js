let lbName = document.getElementById('form-name');
let lbMail = document.getElementById('form-mail');
let lbSubject = document.getElementById('form-subject');
let lbMessage = document.getElementById('form-message');
let form = document.getElementById('form')


//- Campo Nombre no debe estar en blanco o vacío.
//- Debe contener máximo 50 caracteres.
//- Mostrar mensaje de error específico cuando alguna de estas condiciones no sea cumplida 

form.addEventListener('submit', e=> {
    
    e.preventDefault() // Evita que se envie por default
    let warning = ""
    let enter = false
    let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    alert.innerHTML = ""
    if(lbName.value.length < 2){
        alert('El nombre debe ser valido')
        
    }
    if(!regexMail.test(lbMail.value)){
        alert('El mail no es valido')
        
    }  

})