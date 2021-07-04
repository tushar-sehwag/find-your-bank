import React, {useState} from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { useEffect } from 'react'

const Dropdown = ({ initialValue, label, items, changeItem }) => {
    const [item, setItem] = useState(initialValue)

    useEffect(() => {
        changeItem(item)
    }, [item])

    return (
        <FormControl>
            <InputLabel htmlFor={label} shrink={true}>{label}</InputLabel>
            <Select
                value={item}
                id={label}
                onChange={e => setItem(e.target.value)}
            >
            {
                items.map(i => (
                    <MenuItem key={i.key} value={i.key}>{i.name}</MenuItem>
                ))
            }
            </Select>
        </FormControl>
    )
}

export default Dropdown
