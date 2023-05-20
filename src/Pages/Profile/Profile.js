import React, {useEffect} from "react";
import ProfileForm from "../../Components/ProfileForm/ProfileForm";
import VerifyLogIn from "../../verifyLogin";
import { useNavigate } from "react-router-dom";


export const ProfileUser = () => {

//     const navigate = useNavigate();
    
//     const backToLogIn = () => {
//         let flag = VerifyLogIn();
//        if(flag===null){
//        navigate("/");
//        }
//        else{
//         console.log("sí llega");
//        }
//    }

//    useEffect(() => {
//            backToLogIn();
//    }, [backToLogIn]);
    
    return(
        <div className="createEmployeePage">
            <h1 className="titlePage">
                Perfil
            </h1>
            <ProfileForm/>
        </div>
    );
};