import {db} from './firebase'

const addNew = (data) => {
    return db.collection('noticias').add({
        nombre: 'noticia 1',
        fecha:'hoy',
        imagen:'https://elcapitalfinanciero.com/wp-content/uploads/2018/09/toronto-863428_1920.jpg',
        descripcion: 'descripcion'
    })
}

export {
    addNew,
}