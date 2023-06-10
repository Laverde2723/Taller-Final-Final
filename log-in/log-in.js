/*import '../global.scss'*/
import { createUser } from '../Products/firebase.js'

const buttonLogIn = document.querySelector('#button')
buttonLogIn.addEventListener('click', () => {
    console.log("funcionando");
    logIn()})

async function logIn() {
    const email = document.getElementById('email-input').value
    const pass = document.getElementById('pass-input').value
    

    const userCreated = await createUser(email, pass)
    if (userCreated.status) {
        alert('Sesion iniciada, uid: ' + userCreated.info)
    } else {
        alert(userCreated.info)
    }


}