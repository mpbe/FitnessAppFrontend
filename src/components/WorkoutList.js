function WorkoutList({workouts, onDelete}) {

    return (

        <div>
            <p className="text-center text-3xl font-semibold mb-8">Workouts</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                
                {workouts.length > 0 ? (workouts.map((w) => (
                    <div className="px-10 py-7 max-w-md flex flex-col gap-y-4 rounded-lg shadow-lg bg-white" key={w.id}>
    
                        <p className="text-lg font-semibold">{w.name}</p>
                        
                        <p>{w.description}</p>
    
                        <button
                        className="bg-red-700 hover:bg-red-800 rounded-md px-2 py-1 self-start text-white"
                        onClick={() => onDelete(w.id)}
                        >Delete</button>
                    </div>))) 
                    : 
                    <div className="text-center text-gray-700 py-10">
                        No workouts yet! Create your first workout above
                    </div>
                }
            </div>
        </div>
    )
}

export default WorkoutList