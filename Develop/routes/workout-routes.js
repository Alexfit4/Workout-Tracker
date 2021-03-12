const Workout = require("../models/workoutModel");
const { ObjectId } = require('bson');

// Routes
module.exports = (app) => {
	// * GET route for getting all of the projects
	//!  Read
	app.get("/api/workouts", async (req, res) => {
		try {
			const workouts = await Workout.find({});

			return res.json(workouts);
		} catch (err) {
			console.log(err, "Something went wrong");

			return res.json(err);
		}
	});

	app.post("/api/workouts", async (req, res) => {
		const { type, name, duration, weight, reps, sets } = req.body;

		try {
			const workouts = await Workout.create({
				type,
				name,
				duration,
				weight,
				reps,
				sets,
			});
            console.log(workouts);
			return res.json(workouts);
            
		} catch (err) {
			console.log(err, "Something went wrong");

			return res.json(err);
		}
	});


    app.put('/api/workouts/:id', async (req, res) => {
        const id = req.params.id
    
        try {
            const workouts = await Workout.findOneAndUpdate(
                {_id: ObjectId(id)},
                {
                    $set: {
                        type: req.body.type,
                        name: req.body.name,
                        duration: req.body.duration,
                        weight: req.body.weight,
                        reps: req.body.reps,
                        sets: req.body.sets
                    }
                },
                {
                    upsert: true
                }
    
                )
    
    
    
            return  res.json(workouts);
            
        } catch (err) {
            console.log(err, "Something went wrong");
    
            return  res.json(err);
        }
    });
};
