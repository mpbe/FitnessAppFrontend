import { useState, useEffect } from "react"
import { fetchWorkouts, deleteWorkout } from "../api/api"

function WorkoutList({token}) {

    const [workouts, setWorkouts] = useState([])

    const load = async () => {

        try {
            const data = await fetchWorkouts(token)
            setWorkouts(data)
        } catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        if (token) load()
        }, [token]
    )


    const handleDelete = async(id) => {
        try {
            await deleteWorkout(token, id)
            load()
        } catch (err) {
            alert(err.message)
        }
    }

    

    return (

        <div>
            <h3>Workouts</h3>

            {workouts.map((w) => (
                <div className="" key={w.id}>

                    <p>Workout {w.id}</p>
                    <strong>{w.name}</strong>
                    <p>{w.description}</p>

                    <button
                    onClick={() => handleDelete(w.id)}
                    >Delete</button>
                </div>
            ))}
        </div>
    )
}

export default WorkoutList