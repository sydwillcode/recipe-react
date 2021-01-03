import {useState} from "react";

export default function useSetValue(initialVal = ''){
const [value, setValue] = useState(initialVal)

const handleChange = (e) => {
   // e.preventDefault();
   setValue(e.target.value)
}
return [value, handleChange]
}

