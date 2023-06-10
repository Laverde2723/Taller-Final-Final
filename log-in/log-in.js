/*import '../global.scss'*/
import { createUser, signInWithUser } from '../Products/firebase.js'

const buttonLogIn = document.querySelector('#button')
buttonLogIn.addEventListener('click', () => {
    console.log("funcionando");
    logIn()})

async function logIn() {
    const email = document.getElementById('email').value
    const pass = document.getElementById("password").value
    

    const userCreated = await signInWithUser(email, pass)
    if (userCreated) {
        alert('Sesion iniciada, uid: ' + userCreated.info)
        window.location.href = './main/index.html'
    } else {
        alert(userCreated.info)
    }


}