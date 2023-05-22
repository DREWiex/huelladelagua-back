const express=require('express');
const { getFullData, saveQuestionnaire, deleteQuiz, getFeedBack } = require('../controllers/apiControllers');
const {check} =require('express-validator')
const {validarInputs} = require('../middleware/inputValidate')
const router=express.Router();



router.get('/getFullData', getFullData)

router.post('/saveQuestionnaire',[
    check('quiz1', 'Falta el quiz1').not().isEmpty(),
    check('quiz2', 'Falta el quiz2').not().isEmpty(),
    check('quiz3', 'Falta el quiz3').not().isEmpty(),
    check('quiz4', 'Falta el quiz4').not().isEmpty(),
    check('quiz5', 'Falta el quiz5').not().isEmpty(),
    check('quiz6', 'Falta el quiz6').not().isEmpty(),
    check('quiz7', 'Falta el quiz7').not().isEmpty(),
    check('quiz8', 'Falta el quiz8').not().isEmpty(),
    check('quiz9', 'Falta el quiz9').not().isEmpty(),
    check('quiz10', 'Falta el quiz10').not().isEmpty(),
    check('quiz11', 'Falta el quiz11').not().isEmpty(),
    check('quiz12', 'Falta el quiz12').not().isEmpty(),
    check('quiz13', 'Falta el quiz13').not().isEmpty(),
    check('quiz14', 'Falta el quiz14').not().isEmpty(),
    check('quiz15', 'Falta el quiz15').not().isEmpty(),
validarInputs], saveQuestionnaire)

router.post('/feedbackdata', getFeedBack)

router.delete('/deleteone/:id', deleteQuiz)

module.exports=router