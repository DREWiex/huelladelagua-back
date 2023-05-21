const express=require('express');
const { getFullData, saveQuestionnaire } = require('../controllers/apiControllers');
const router=express.Router();


router.get('/getFullData', getFullData)

router.post('/saveQuestionnaire', saveQuestionnaire)

module.exports=router