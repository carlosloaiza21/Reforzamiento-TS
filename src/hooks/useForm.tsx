import { useState } from "react"


export const useForm = <T extends Object>(data: T) => {

    const [state, setState]=useState(data)

    const onChange = (value: string, campo: keyof T) =>{
        setState({
            ...state,
            [campo]: value
        })
    }

    return {
        onChange,
        state
    }

}
