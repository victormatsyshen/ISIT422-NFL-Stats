// mongoose is a API wrapper overtop of mongodb, just like
// .ADO.Net is a wrapper over raw SQL server interface
const mongoose = require("mongoose");

// here we define a schema for our document database
// mongo does not need this, but using mongoose and requiring a 
// schema will enforce consistency in all our documents (records)
const Schema = mongoose.Schema;

// this must match out object defintion on the client, as it will get json
// data returned with these key: value pair names
const TeamSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true               // don't allow duplicate keys
  },
  name: {
    type: String,
    required: true 
  },
  count: {
    type: Number,
    required: true
  }

  
},
{ collection: 'NFLTeamsCollection' }
);

module.exports = mongoose.model("TeamSchema", TeamSchema);