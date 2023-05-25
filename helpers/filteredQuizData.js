
/**
 * Filtra los datos de entrada y genera una URL para una predicción utilizando el algoritmo K-means.
 *
 * @param {object} data - Objeto que contiene los datos de entrada.
 * @param {string} data.quiz4 - Respuesta al cuestionario 4.
 * @param {string} data.quiz9 - Respuesta al cuestionario 9.
 * @param {string} data.quiz10 - Respuesta al cuestionario 10.
 * @param {string} data.quiz11 - Respuesta al cuestionario 11.
 * @param {number} data.quiz14 - Respuesta al cuestionario 14.
 * @returns {string} URL de predicción generada.
 */
const filteredData = ({ quiz4, quiz9, quiz10, quiz11, quiz14 }) => {
    let param1, param2, param3, param4, param5,param6

    switch (quiz4) {
        case "Ahorrar agua":
            param1 = 0
            break;
        case "Ayudar al ecosistema":
            param1 = 0
            break;
        case "Ahorrar dinero":
            param1 = 2
            break;
        case "Conocer mi huella hídrica":
            param1 = 1
            break;
    }

    switch (quiz9) {
        case "Sí":
            param2 = 0
            break;
        case "No":
            param2 = 1
            break;
        case "¡Buena idea! ¡Voy a probarlo!":
            param2 = 0
            break;
    }

    switch (quiz10) {
        case "A veces":
            param3 = 1
            break;
        case "Siempre":
            param3 = 0
            break;
        case "¡Nunca!":
            param3 = 2
            break;
    }

    switch (quiz11) {
        case "1 vez al día":
            param4 = 1
            break;
        case "1 vez cada 3 días":
            param4 = 1
            break;
        case "1 vez a la semana":
            param4 = 1
            break;
        case "¡Nunca!":
            param4 = 0
            break;
    }

    if (quiz14 > 0) {
        param5 = 0
        param6 = 1
    } else {
        param5= 1
        param6 = 0
    }

    return `http://3.144.196.76/api/k-means/prediction?data=${param1}&data=${param2}&data=${param3}&data=${param4}&data=${param5}&data=${param6}`


}
//http://3.144.111.165/ antigua url
// http://3.144.196.76/ nueva url
module.exports = {
    filteredData
}