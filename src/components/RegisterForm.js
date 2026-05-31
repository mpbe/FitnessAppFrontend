import { useState } from "react"
import { registerUser } from "../api/api"
import { Link, useNavigate } from "react-router-dom"


function RegisterForm({link}) {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })


    const handleSubmit = async(e) => {

        e.preventDefault()
            
        try{
            await registerUser(form)
            alert("account created")
            navigate("/login")
            
            
        } catch (err) {
            alert(err.message)
        }
        
    }

    return (

    <div className="h-screen flex items-center justify-center">
        <div className="py-5 px-10 max-w-md w-full border border-solid border-gray-50 bg-white rounded-lg shadow-lg">
            <h3 className="text-center font-semibold text-xl mb-5">Register</h3>

            <form className= "flex flex-col gap-y-5" onSubmit={handleSubmit}>

                <div>
                    <p>Username</p>
                    <input
                        className="p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
                        value={form.username}
                        onChange={e => setForm({...form, username: e.target.value})}
                    />
                </div>

                <div>
                    <p>Email</p>
                    <input
                        className="p-2 border border-gray-300 rounded-md bg-gray-100 w-full"
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                    />
                </div>

                <div>
                    <p>Password</p>
                    <input
                        className="p-2 border border-gray-300 rounded-md bg-gray-100 w-full mb-1"
                        type= "password"
                        value={form.password}
                        onChange={e => setForm({...form, password: e.target.value})}
                    />
                </div>

                <button
                    className="p-2 rounded-md bg-green-500 hover:bg-green-600 text-white mb-5"
                >
                    Submit
                </button>
            </form>

            <div className="hover:underline text-center">
                <Link
                    to={link}
                    className=""
                > 
                    Back to Login
                </Link>
            </div>
        </div>
    </div>
    )

}

export default RegisterForm