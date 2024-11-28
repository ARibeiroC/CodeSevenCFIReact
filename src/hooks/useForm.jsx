import { useState } from "react";

export function useForm(forms){
    const [currentForm, setcurrentForm] = useState(0)

    const changeForm = (i, e)=> {
        e.preventDefault()
        if (i<0 || i>=forms.length) return

        setcurrentForm(i)
    }

    return { 
        currentForm,
        changeForm,
        currentComponent: forms[currentForm]
    }

}