import { useState } from "react";
import { loginUser } from "../api/api";
import { useNavigate, Link } from "react-router-dom";

function LoginForm({link}) {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async() => {

        try{
            const loginData = await loginUser(username, password)

            localStorage.setItem("token", loginData.access_token)
            navigate("/home")
            
        } catch (err) {
            alert(err.message)
        }

    }


    return (
       
        <div className="">
            <h3 className="">Login</h3>

            <input 
                className=""
                placeholder="Enter username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <input 
                className=""
                placeholder="Enter password"
                type= "password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <button
                className=""
                onClick={handleLogin}
            >
                Submit
            </button>

            <p>No Account?

                <Link
                 className=""
                 to={link}
                >

                 Register Here
                </Link>
            </p>
        </div>
    )
}

export default LoginForm