import mongoose from "mongoose"

const transcationSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    plan: {type: String, required: true},
    amount: {type: Number, required: true},
    credits: {type: Number, required: true},
    payment: {type: Boolean, default: false},
    date: {type: Number},






    
})

const transactionModel = mongoose.models.transaction || mongoose.model("transaction", transcationSchema)

export default transactionModel