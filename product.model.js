const mongoose=require('mongoose');
const schema =mongoose.schema;

let ProductSchema = new Schema({

    name: {type: string, required: true, max: 100},
    price: {tyoe: Number, required: true}});
    // export the model
    module.exports = mongoose.model('product', ProductSchema);