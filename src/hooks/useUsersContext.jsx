import { useContext } from "react";
import { UserContext } from '../context/UserContext'

export function useUserContext(){
    const context = useContext(UserContext)

    if (!context){
        console.log('O contexto não foi encontrado!')
        return
    }
        
    
    console.log(context)
    return context
}