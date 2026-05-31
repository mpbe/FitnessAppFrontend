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
       
        <div className="h-screen flex items-center justify-center">
            <div className="py-5 px-10 max-w-md w-full border border-solid border-gray-50 flex flex-col gap-y-5 shadow-lg bg-white rounded-lg">
                <h3 className="text-center font-semibold text-xl">Login</h3>
                
                <div>
                    <p>Username</p>
                    <input 
                        className="p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
    
                <div>
                    <p>Password</p>
                    <input 
                        className="p-2 border border-gray-300 rounded-md bg-gray-100 w-full mb-2"
                        type= "password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
    
                <button
                    className="p-2 rounded-md bg-green-500 hover:bg-green-600 text-white"
                    onClick={handleLogin}
                >
                    Submit
                </button>         
    
                <div className="hover:underline text-center">
                    <Link
                        to={link}
                    >
    
                        No Account? Register
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default LoginForm