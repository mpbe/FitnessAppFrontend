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

        <div className="">
            <h3 className="">Register</h3>

            <form className= "" onSubmit={handleSubmit}>

                <input
                    className=""
                    placeholder="Enter username"
                    value={form.username}
                    onChange={e => setForm({...form, username: e.target.value})}
                />

                <input
                    className=""
                    placeholder="Enter email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                />

                <input
                    className=""
                    placeholder="Enter password"
                    type= "password"
                    value={form.password}
                    onChange={e => setForm({...form, password: e.target.value})}
                />

                <button
                    className=""
                >
                    Submit
                </button>
            </form>

            <Link
                to={link}
                className=""
            > 
                Back to Login
            </Link>
        </div>
    )

}

export default RegisterForm