const mongoose=require('mongoose')

/**
 * Establece una conexión a la base de datos de MongoDB.
 * @returns {Promise<Object>} - Promesa que resuelve en una respuesta de conexión exitosa o un mensaje de error.
 * @throws {Error} - Error al conectar con la base de datos.
 */
const conexion=async()=>{

    try {
        const respuesta=await mongoose.connect(process.env.URI_CONNECT)
        console.log('conectado a bbdd')
        return respuesta
        
    } catch (error) {
        return {
            ok:false,
            msg:'Error al conectar con la base de datos'
        }
    }   

}


module.exports={
    conexion
}