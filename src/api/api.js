const API_URL = process.env.REACT_APP_API_URL

export const loginUser = async(username, password) => {

    const loginData = new URLSearchParams()
    loginData.append("username", username)
    loginData.append("password", password)

    const res = await fetch(`${API_URL}/users/login`, {
        method : "POST",
        headers : {
            "Content-Type": "application/x-www-form-urlencoded" 
        },
        body : loginData

    })

    if (!res.ok) throw new Error("Login failed")
    
    return res.json()
}


export const fetchWorkouts = async (token) => {

    const res = await fetch(`${API_URL}/workouts/`, {
        
        headers : {
            Authorization : "Bearer " + token
        }

    })

    if (!res.ok) throw new Error("Fetch failed")
    
    return res.json()
}


export const createWorkout = async (token, workout) => {

    const res = await fetch(`${API_URL}/workouts/`, {
        method : "POST",
        headers : {
            "Content-Type": "application/json",
            Authorization : "Bearer " + token
        },
        body : JSON.stringify(workout)

    })

    if (!res.ok) throw new Error("Create failed")
    
    return res.json()
}


export const deleteWorkout = async (token, id) => {
    
    const res = await fetch(`${API_URL}/workouts/${id}`, {
        method : "DELETE",
        headers : {
            Authorization : "Bearer " + token
        },

    })

    if (!res.ok) throw new Error("Delete failed")
    
    return res.json()
}


export const registerUser = async (data) => {
    const res = await fetch(`${API_URL}/users/`, {
        method: "POST",
        headers : { 
            "Content-Type": "application/json" 
        },
        body : JSON.stringify(data)

    })

    if (!res.ok) throw new Error("Register failed")
    
    return res.json()
}