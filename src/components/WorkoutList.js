function WorkoutList({workouts, onDelete}) {

    return (

        <div>
            <h3>Workouts</h3>

            {workouts.map((w) => (
                <div className="" key={w.id}>

                    <p>Workout {w.id}</p>
                    <strong>{w.name}</strong>
                    <p>{w.description}</p>

                    <button
                    onClick={() => onDelete(w.id)}
                    >Delete</button>
                </div>
            ))}
        </div>
    )
}

export default WorkoutList