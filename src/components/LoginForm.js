import { useState } from "react";
import { loginUser } from "../api/api";

function LoginForm({setToken}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async() => {

        try{
            const loginData = await loginUser(username, password)
            setToken(loginData.access_token)
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
        </div>
    )
}

export default LoginForm