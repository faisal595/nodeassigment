const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    inventory_id: String,
    inventoryType: String,
    itemName: String,
    Available_Quantity: String,
    isPromoted: Boolean
});

const userModal = mongoose.model("user", userSchema);

module.exports = userModal;