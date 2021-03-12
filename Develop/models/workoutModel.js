// Create the required custom methods at the bottom of this file

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	type: {
		type: String,
	},
	name: {
		
		type: String,
	},
	duration: {
		type: Number
	}, 
	weight: {
		type: Number
	},
	reps: {
		type: Number
	},
	sets: {
		type: Number
	},
	day: {
		type: Date,
		default: Date.now,
	},

}, {timestamps: true });

// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the Workout model
module.exports = Workout;
