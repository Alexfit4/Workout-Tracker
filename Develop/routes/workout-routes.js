const Workout = require("../models/Workout");
// const Exercise = require("../models/Exercise");
const { ObjectId } = require("bson");

// Routes
module.exports = (app) => {
	// * GET route for getting all of the projects
	//!  Read
	app.get("/api/workouts", (req, res) => {
		Workout.find({}, (error, data) => {
		  if (error) {
			res.send(error);
		  } else {
			res.json(data);
		  }
		});
	  });



	app.post("/api/workouts/", (req, res) => {
		console.log("createWorkout", req.body);
		Workout.create({
			exercises: [req.body],
		})
			.then((dbWorkout) => {
				res.json(dbWorkout);
				console.log(5, dbWorkout);
			})
			.catch((err) => {
				res.json(err);
				// console.log(6);
			});
	});

	app.put("/api/workouts/:id", (req, res) => {
		console.log(req.params.id);
		console.log(req.body);

		Workout.findOneAndUpdate(
			{ _id: req.params.id },
			{ $push: { exercises: req.body } },
			{ new: true }
		)
			// .populate("Workouts")
			.then((dbWorkout) => {
				res.json(dbWorkout);
				console.log(7);
			})
			.catch((err) => {
				res.json(err);
				// console.log(8);
			});
	});


};
