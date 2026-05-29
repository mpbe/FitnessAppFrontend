import { useState } from "react";
import { createWorkout } from "../api/api";

function CreateWorkout({token, onCreated}) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const handleCreate = async () => {

        try {

            await createWorkout(token, {name, description})
            setName("")
            setDescription("")
            onCreated()

        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className="">
            <h3 className="">Create Workout</h3>

            <input 
                className=""
                placeholder="Enter name"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <input 
                className=""
                placeholder="Enter description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />

            <button
                className=""
                onClick={handleCreate}
            >
                Submit
            </button>

        </div>
    )
}

export default CreateWorkout