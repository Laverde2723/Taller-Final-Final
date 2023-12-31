import { createUser } from '../Products/firebase.js'


const inputElements = document.querySelector('.formulario').querySelectorAll('input')
console.log(inputElements)

const formButtom = document.getElementById('submit')
formButtom.addEventListener('click', (e)=> signUp(e))

function signUp(e) {

    e.preventDefault()

const userInfo = {}

inputElements.forEach((elem)=>{
    if(elem.files && elem.files[0]){
        userInfo[elem.name] = elem.files[0]
    } else if(elem.value && elem.value.length > 0){
        userInfo[elem.name] = elem.value
     } else {
            alert('No todos los valores estan diligenciados')
        }
    })

    if(userInfo.pass === userInfo.confirm){
        createUser(userInfo)
    } else{
        alert('las contraseñas no coinciden')
    }
}