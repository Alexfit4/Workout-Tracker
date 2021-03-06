const Workout = require("../models/Workout");
// const Exercise = require("../models/Exercise");
const { ObjectId } = require("bson");

// Routes
module.exports = (app) => {
	// * GET route for getting all of the projects
	//!  Read
	app.get("/api/workouts", (req, res) => {
		console.log("get method");
		Workout.find({})
			.then((dbWorkout) => {
				res.json(dbWorkout);
				console.log(dbWorkout);
			})
			.catch((err) => {
				console.log("here", err);
				res.json(err);
			});
	});

	app.post("/api/workouts", (req, res) => {
		console.log("post method");
		console.log(req.body);

		Workout.create(req.body)
			.then((dbWorkout) => {
				res.json(dbWorkout);
				console.log(dbWorkout);
			})
			.catch((err) => {
				res.json(err);
			});
	});

	app.put("/api/workouts/:id", (req, res) => {
		console.log(req.params.id);
		console.log(req.body);
		console.log("put method");

		Workout.findOneAndUpdate(
			{ _id: req.params.id },
			{ $push: { exercises: req.body } },
			{ new: true }
		)
			// .populate("Workouts")
			.then((dbWorkout) => {
				res.json(dbWorkout);
				console.log(dbWorkout);
			})
			.catch((err) => {
				res.json(err);
				// console.log(8);
			});
	});

	app.get("/api/workouts/range", (req, res) => {
		Workout.find({}, (error, data) => {
			if (error) {
				res.send(error);
			} else {
				res.json(data);
			}
		});
	});
};
