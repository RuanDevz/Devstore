import { ComponentProps } from "react"

type InputProps = ComponentProps<'input'> &{
    label?: string
}

export default function Input({label ,...props}: InputProps) {
    return <div>
        <label htmlFor=""></label>
        <input type="text" {...props} />
    </div>
}