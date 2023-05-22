const {Schema,model}=require('mongoose')

const QuestionnaireSchema=new Schema({

    quiz1:{
        type:String,
        required:true, 
    },
    quiz2:{
        type:Number,
        required:true
    },
    quiz3:{
        type:String,
        required:true, 
    },
    quiz4:{
        type:String,
        required:true, 
    },
    quiz5:{
        type:String,
        required:true, 
    },
    quiz6:{
        type:String,
        required:true, 
    },
    quiz7:{
        type:String,
        required:true, 
    },
    quiz8:{
        type:String,
        required:true, 
    },
    quiz9:{
        type:String,
        required:true, 
    },
    quiz10:{
        type:String,
        required:true, 
    },
    quiz11:{
        type:String,
        required:true, 
    },
    quiz12:{
        type:String,
        required:true, 
    },
    quiz13:{
        type:String,
        required:true, 
    },
    quiz14:{
        type:Number,
        required:true, 
    },
    quiz15:{
        type:String,
        required:true, 
    },

    quizDate:{
        type:Date,
        default:Date.now
    }
})




module.exports=model('Questionnaire',QuestionnaireSchema)