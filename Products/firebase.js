// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, addDoc, setDoc, doc } from "firebase/firestore";
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { loadConfigFromFile } from "vite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD7uZR0-kVREToBeeUNOMj7XKvQKvMX0k",
    authDomain: "todo-list-64a35.firebaseapp.com",
    projectId: "todo-list-64a35",
    storageBucket: "todo-list-64a35.appspot.com",
    messagingSenderId: "50524719749",
    appId: "1:50524719749:web:b88e36bf4f88cc3d8337ec",
    measurementId: "G-QL7ZVED1GG"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export async function getTasks(){
    const allTasks =[]
    const querySnapshot = await getDocs(collection(db,"tasks"));
    querySnapshot.forEach((doc)=>{
        allTasks.push({...doc.data(), id: doc.id})
    });
    console.log(allTasks);

    return allTasks;
}

export async function traerProductos(){

    const productos =[]
    const querySnapshot = await getDocs(collection(db,"products"));
    console.log(querySnapshot);
    querySnapshot.forEach((doc)=>{
        productos.push({...doc.data(), id: doc.id})
    });

    console.log(productos);
    return productos;
}

export async function addTask(taskTitle){
    try {
        const docRef = await addDoc(collection(db, "tasks"), {
          title: taskTitle,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function editDocument(title,id){

await setDoc(doc(db, "tasks", id), {
  title: title,
  completed: true,
});

}

export async function addUserToDb(userInfo, id) {
  try {
      await setDoc(doc(db, "users", id), userInfo);
      console.log("user written with ID: ", id);   
  } catch (e) {
      console.error("Error adding document: ", e);
  }
}

export async function createUser(userInfo){

  try{
  let userCredential = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.pass) 
  
  // Signed in

  const user = userCredential.user;
  console.log(user)

  //subir imagen

     const url = await uploadFile(user.uid+userInfo.picture.name, userInfo.picture, 'profilePicture')
  
     // crear usuario en DB

  const dbInfo = {
      url,
      email: userInfo.email,
      username: userInfo.username,
  }
addUserToDb(dbInfo, user.uid)

  }

catch(error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(error.message)
  // ..
}
}

export async function uploadFile(name, file, folder) {
  
  try {
      const taskImgRef = ref(storage, `${folder}/${name}`);
      await uploadBytes(taskImgRef, file);
      const url = await getDownloadURL(taskImgRef);
      return url;
  } catch (error) {
      console.log("error creando imagen ->", error);
  }
}
 