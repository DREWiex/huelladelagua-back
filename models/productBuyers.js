const {Schema,model}=require('mongoose')

const ProductClientsSchema=new Schema({

    date:{
        type:Date,
        default:Date.now
    },

    email: {
        type:String,
        required:true
    },

    suscription: {
        type: Boolean,
        default: false
    }
})




module.exports=model('ProductClients',ProductClientsSchema)