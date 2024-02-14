import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getUserById, validation } from "../Redux/action"

export const Registrado = () =>{
    const dispatch = useDispatch()
    const { id } = useParams()
    const user = useSelector((state) => state.user)
    const succes = useSelector((state) => state.succes)
    
    console.log("antes", succes);
    
    useEffect(()=>{
        if (!user?.result){
            dispatch(getUserById(id))
            
        }else{
            dispatch(validation(user.result.cod, user.result.id))
        }
    },[user])
    console.log(user.result, "estado glonal");
    console.log("despues", succes.message);
    return (
    <div>
    <p>{succes.message}</p>    
    </div>    

    )
}