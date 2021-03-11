// Create the required custom methods at the bottom of this file

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	exercises: {
		type: String,
		name: String,
		duration: Number,
		weight: Number,
		reps: Number,
		sets: Number,
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
