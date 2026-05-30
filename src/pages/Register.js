import { useState } from "react"
import { register } from "../api/api"

function Register() {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = async(e) => {

        e.preventDefault()
        
        try{
            await register(form)
            
            
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
                    value={username}
                    onChange={e => setForm({...form, username: e.target.value})}
                />
                <input
                    className=""
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setForm({...form, email: e.target.value})}
                />
                <input
                    className=""
                    placeholder="Enter password"
                    type= "password"
                    value={password}
                    onChange={e => setForm({...form, password: e.target.value})}
                />
                <button
                    className=""
                >
                    Submit
                </button>
            </form>
        </div>
    )

}

export default Register