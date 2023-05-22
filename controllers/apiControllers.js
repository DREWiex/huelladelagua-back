const { quizAgr } = require('../helpers/quizAgregate')
const Questionnaire = require('../models/questionnaireModel')
const mongoose = require('mongoose')


/**
 * Obtiene la información completa de los cuestionarios.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @param {Array} quiz - resultado de todos los valores de un campo del questionario.
 * @throws {Error} - Error al obtener los servicios.
 */
const getFullData = async (req, res) => {

    
    try {
        const total = await Questionnaire.countDocuments()

        const quiz1 = await Questionnaire.aggregate(quizAgr(1))

        const quiz2 = await Questionnaire.aggregate(quizAgr(2))

        const quiz3 = await Questionnaire.aggregate(quizAgr(3))

        const quiz4 = await Questionnaire.aggregate(quizAgr(4))

        const quiz5 = await Questionnaire.aggregate(quizAgr(5))

        const quiz6 = await Questionnaire.aggregate(quizAgr(6))

        const quiz7 = await Questionnaire.aggregate(quizAgr(7))

        const quiz8 = await Questionnaire.aggregate(quizAgr(8))

        const quiz9 = await Questionnaire.aggregate(quizAgr(9))

        const quiz10 = await Questionnaire.aggregate(quizAgr(10))

        const quiz11 = await Questionnaire.aggregate(quizAgr(11))

        const quiz12 = await Questionnaire.aggregate(quizAgr(12))

        const quiz13 = await Questionnaire.aggregate(quizAgr(13))

        const quiz14 = await Questionnaire.aggregate(quizAgr(14))

        const quiz15 = await Questionnaire.aggregate(quizAgr(15))



        res.status(200).json({
            ok: true,
            msg: 'Obtenida toda la información',
            total,
            quiz1: quiz1[0].values,
            quiz2: quiz2[0].values,
            quiz3: quiz3[0].values,
            quiz4: quiz4[0].values,
            quiz5: quiz5[0].values,
            quiz6: quiz6[0].values,
            quiz7: quiz7[0].values,
            quiz8: quiz8[0].values,
            quiz9: quiz9[0].values,
            quiz10: quiz10[0].values,
            quiz11: quiz11[0].values,
            quiz12: quiz12[0].values,
            quiz13: quiz13[0].values,
            quiz14: quiz14[0].values,
            quiz15: quiz15[0].values,

                    })
                    
    } catch (error) {
        console.error(error);
        res.status(404).json({
            ok: false,
            msg: 'Error al obtener los servicios',
            error
        })
    }
}


/**
 * Guarda un nuevo cuestionario en la base de datos.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @param {Object} nuevoQuestionario - Modelo del questionario a guardar.
 * @throws {Error} - Error al guardar el cuestionario en la base de datos.
 */
const saveQuestionnaire = async (req, res) => {
    const nuevoQuestionario = new Questionnaire(req.body)

    try {

        const newQuestionnaireData = await nuevoQuestionario.save()

        res.status(201).json({
            ok: true,
            msg: 'Questionario guardado',
            data: newQuestionnaireData
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al guardar el questionario en la base de datos'
        })
    }
}


/**
 * Elimina un cuestionario de la base de datos por su ID.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @param {String} id - id del questionario a borrar.
 * @throws {Error} - Error al eliminar el cuestionario.
 */
const deleteQuiz = async (req, res) => {
    const id = req.params.id;
    try {
      const deleteResult = await Questionnaire.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
      
      if (deleteResult.acknowledged) {
        res.status(200).json({
            ok: true,
            msg: 'Questionario eliminado exitosamente'
          });
      } else {
        res.status(200).json({
            ok: false,
            msg: 'No se ha podido eliminar el questionario'
          });
      }
      
    } catch (error) {
      console.error(error);
      res.status(500).json({
        ok: false,
        msg: 'Error al eliminar el questionario'
      });
    }
  }

module.exports = {
    getFullData,
    saveQuestionnaire,
    deleteQuiz
}

