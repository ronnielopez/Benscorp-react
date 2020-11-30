import {db} from './firebase'
import firebase from 'firebase'

const addNew = (data) => {
    
    return db.collection('noticias').add({
        nombre: data.nombre,
        fecha:'hoy',
        imagen: data.img,
        descripcion: data.descripcion,
        creado: firebase.firestore.Timestamp.fromDate(new Date())
    })
}

export {
    addNew,
}