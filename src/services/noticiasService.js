import { db } from './firebase'
import firebase from 'firebase'

const addNew = (data) => {
    return db.collection('noticias').add({
        nombre: data.nombre,
        fecha: data.fecha,
        imagen: data.img.name,
        descripcion: data.descripcion,
        creado: firebase.firestore.Timestamp.fromDate(new Date())
    }).then(()=>{
        let storageRef = firebase.storage().ref(`image/${data.img.name}`);
        storageRef.put(data.img);
    })
}

const modificarNew = (data) => {

    return db.collection('noticias').doc(data.id).update({
        nombre: data.nombre,
        fecha: data.fecha,
        imagen: data.img,
        descripcion: data.descripcion,
        creado: firebase.firestore.Timestamp.fromDate(new Date())
    })
}

export {
    addNew, modificarNew
}