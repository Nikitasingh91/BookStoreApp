import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const handlelogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success("Logput successfully")

            setTimeout(() => {
                window.location.reload()



            }, 2000)


        }
        catch (error) {
            toast.error("logout faild" + error.message)
            setTimeout(() => { }, 3000)
        }
    }
    return (
        <div><button onClick={handlelogout} className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>Logout</button></div>
    )
}

export default Logout