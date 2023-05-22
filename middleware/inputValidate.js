const {validationResult} = require('express-validator');


/**
 * Middleware para validar los inputs de una solicitud HTTP.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @param {Function} next - Función para pasar al controlador.
 */
const validarInputs = (req,res,next) => {
    const errors=validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok:false,
            errors:errors.mapped() // el mapped hace que no se cree un objeto de errores dentro de errores
        })
    }
    next()
}

module.exports={
    validarInputs
}