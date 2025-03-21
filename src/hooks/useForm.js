import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

export const useForm = (initialForm={}, schemaYup) => {
    const [formState, setFormState] = useState(initialForm)
    
    const onInputChange = (event) =>{
        const {name, value} = event.target
        setFormState({
            ...formState,
            [name]:value
        })
    }

     

  return {
    formState,
    onInputChange,
    setFormState
  }
}
