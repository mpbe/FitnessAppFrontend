import { useState, useEffect, useCallback } from "react"
import CreateWorkout from "../components/CreateWorkout"
import WorkoutList from "../components/WorkoutList"
import { useNavigate } from "react-router-dom"
import { fetchWorkouts, deleteWorkout } from "../api/api"
import { jwtDecode } from "jwt-decode";


function Home() {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const decoded = jwtDecode(token)
    console.log(decoded)

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
        console.log(decoded)
        navigate("/login");
    }

    return (

        <div className="min-h-screen bg-gray-200 py-10">
            <div className="flex justify-around mb-6">
                <p className="font-semibold text-3xl">Welcome back, {decoded.sub}</p>
                <button
                      className="py-1 px-3 bg-slate-700 text-white rounded-md hover:bg-slate-800"            
                      onClick={handleLogout}
                    >
                      Logout
                </button>
            </div>
            <div className="flex flex-col gap-y-5 max-w-full w-full h-full">
                
                <div className="w-full flex justify-center mb-10">
                    <CreateWorkout token={token} loadWorkouts={loadWorkouts}/>
                </div>

                

                <WorkoutList workouts={workouts} onDelete={handleDelete}/>
            </div>
        </div>

    )

}

export default Home