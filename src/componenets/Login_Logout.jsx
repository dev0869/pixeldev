import { useAuthContext } from "../Context/Authcontext";

const Login_Logout = () => {
    const { GoogleAuth, LogOut, user } = useAuthContext()

    return (
        <>{
            user ? <button className="but"  style={{padding:'8px'}} onClick={LogOut} >logOut</button>
                : <button className="but" style={{padding:'8px'}} onClick={GoogleAuth} >login</button>

        }
        </>


    )
}

export default Login_Logout


