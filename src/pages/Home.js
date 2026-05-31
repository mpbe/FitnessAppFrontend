import { useState, useEffect, useCallback } from "react"
import CreateWorkout from "../components/CreateWorkout"
import WorkoutList from "../components/WorkoutList"
import { useNavigate } from "react-router-dom"
import { fetchWorkouts, deleteWorkout } from "../api/api"


function Home() {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const [workouts, setWorkouts] = useState([])

    const loadWorkouts = useCallback(async () => {

        try {
            const data = await fetchWorkouts(token)
            setWorkouts(data)
        } catch (err) {
            alert(err.message)
        }
    }, [token])

    useEffect(() => {
        loadWorkouts()
    }, [loadWorkouts])
    

    const handleDelete = async(id) => {
        try {
            await deleteWorkout(token, id)
            loadWorkouts()
        } catch (err) {
            alert(err.message)
        }
    }


    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login");
    }

    return (

        <div>
            <button
              onClick={handleLogout}
            >
              Logout
            </button>
            <CreateWorkout token={token} loadWorkouts={loadWorkouts}/>
            <WorkoutList workouts={workouts} onDelete={handleDelete}/>
        </div>

    )

}

export default Home