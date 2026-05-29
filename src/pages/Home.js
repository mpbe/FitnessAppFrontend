import { useState, useEffect } from "react"
import LoginForm from "../components/LoginForm"
import CreateWorkout from "../components/CreateWorkout"
import WorkoutList from "../components/WorkoutList"

function Home() {

    const [token, setToken] = useState("")

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token)
        }
    }
    , [token]
    )

    useEffect (() => {
            const saved = localStorage.getItem("token")
            if (saved) setToken(saved)
        }, []
    )


    const handleLogout = () => {
        localStorage.removeItem("token")
        setToken("")
    }

    return (

        <div>  
            {!token && <LoginForm setToken={setToken}/>}

            {token && 
                <div>
                    <button
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                    <CreateWorkout token={token} onCreated={() => window.location.reload()}/>
                    <WorkoutList token={token}/>
                </div>
            }
        </div>
       

    )

}

export default Home