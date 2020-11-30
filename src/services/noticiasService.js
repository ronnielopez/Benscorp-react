import {db} from './firebase'
import firebase from 'firebase'

const addNew = () => {
    
    return db.collection('noticias').add({
        nombre: 'noticia',
        fecha:'hoy',
        imagen:'https://elcapitalfinanciero.com/wp-content/uploads/2018/09/toronto-863428_1920.jpg',
        descripcion: 'descripcion',
        creado: firebase.firestore.Timestamp.fromDate(new Date())
    })
}

export {
    addNew,
}