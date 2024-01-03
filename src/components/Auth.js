import {auth ,provider} from "../firebase-config.js";
import {signInWithPopup} from "firebase/auth";
import Cookies from "universal-cookie";

const cookies =new Cookies()

export const Auth =(props)  =>{

    const {setIsAuth} =props;

    const signinwithgoogle =async ()=>{

        try{
       const result=  await signInWithPopup(auth,provider);
       cookies.set("auth-token",result.user.refreshToken);
       setIsAuth(true);
        }
        catch(err){
            console.log(err);
        }
    };
    return (
    <div className="auth">
        <p> Sign In With Google</p>
        <button onClick={signinwithgoogle}>
            Sign In With Google
        </button>
    </div>
    );
};