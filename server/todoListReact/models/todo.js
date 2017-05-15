var mongoose = require("mongoose")

module.exports = function(){
	var schema = mongoose.Schema({
		description:{
			type: String,
			required: true
		},

		done:{
			type: Boolean,
			required: true,
			default: false
		},

		createdAt:{
			type: Date, 
			default: Date.now
		}
	})

	return mongoose.model("Todo", schema)
}