import { Dispatch, SetStateAction, useState } from 'react'

export type FormField<T> = {
	values: T,
	onChanges: (event: React.ChangeEvent<HTMLInputElement>) => void,
	setValues: Dispatch<SetStateAction<T>>
}


export const useForm = <T>(init?: T):  FormField<T> => {
    const [values, setValues] = useState<T>(init as T)
    
    const onChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({
			...values,
			[event.target.name]: ( event.target.type === 'number'  ? Number(event.target.value) : event.target.value)
		})   
    }

    return { values, onChanges, setValues }
}