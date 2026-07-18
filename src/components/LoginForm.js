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

            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-md">
                
                <h4 className="font-semibold text-center mb-2">
                    Demo Account
                </h4>

                <p className="text-sm">
                    Username: <strong>demo</strong>
                </p>

                <p className="text-sm">
                    Password: <strong>demo</strong>
                </p>

                <button
                    type="button"
                    onClick={() => {
                        setUsername("demo");
                        setPassword("demo");
                    }}
                    className="mt-2 w-full text-sm bg-blue-500 hover:bg-blue-600 text-white rounded py-1"
                >
                    Fill Credentials
                </button>
            </div>

            <div className="py-5 px-10 max-w-md w-full border border-solid border-gray-50 flex flex-col gap-y-5 shadow-lg bg-white rounded-lg">
                <h3 className="text-center font-semibold text-xl">Login</h3>
                
                <div>
                    <label>Username</label>
                    <input 
                        className="p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
    
                <div>
                    <label>Password</label>
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
                    Login
                </button>         
    
                <div className="hover:underline text-center">
                    <Link
                        to={link}
                    >
    
                        Don't have an account?
                    </Link>
                </div>
                
            </div>
            
        </div>
    )
}

export default LoginForm