const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create purchase schema
const purchaseSchema = new Schema({
    purchase: [
        {
            product: {type: Schema.Types.ObjectId, ref: 'products', required: true},
            quantity: {type: Number, required: true},
            _id: {id: false}
        }
    ],
    createdAt: {type: Date, required: true, default: new Date()},
    deletedAt: {type: Date, default: null}
},{collection: 'purchases'});

//create purchase model
const purchaseModel = mongoose.model('PurchaseModel',purchaseSchema);

//export purchase model
module.exports = purchaseModel;