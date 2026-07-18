import { useState } from "react";
import { createWorkout } from "../api/api";


function CreateWorkout({token, loadWorkouts}) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const handleCreate = async () => {

        try {

            await createWorkout(token, {name, description})
            setName("")
            setDescription("")
            loadWorkouts()

        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className="py-5 px-10 flex flex-col gap-y-5 bg-white shadow-lg rounded-lg max-w-lg w-full">
            <h3 className="text-center font-semibold text-lg">
                Create Workout
            </h3>

            <div>
                <p>Name</p>
                <input 
                    className="p-2 border border-gray-200 rounded-md w-full"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div>
                <p>Description</p>
                <input 
                    className="p-2 border border-gray-200 rounded-md w-full"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>

            <button
                className="py-2 px-4 rounded-md bg-green-500 hover:bg-green-600 text-white self-start"
                onClick={handleCreate}
            >
                Submit
            </button>

        </div>
    )
}

export default CreateWorkout