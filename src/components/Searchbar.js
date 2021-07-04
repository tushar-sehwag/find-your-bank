import { TextField, InputAdornment } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Searchbar = ({ label, changeSearch }) => {
    const [value, setValue] = useState("")

    useEffect(() => {
        if(value){
            changeSearch(value)
        }
    }, [value])

    return (
        <TextField
            id="input-with-icon-textfield"
            label={label}
            value={value}
            type="search"
            onChange={e => setValue(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
            }}
        />
    )
}

export default Searchbar
