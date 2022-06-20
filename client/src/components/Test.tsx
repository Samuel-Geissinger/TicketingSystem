import { Box, Button, FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

interface testing {
  title: string,
  description: string,
  priority: string
}

const initialValues: testing = {
  title: '',
  description: '',
  createdDate: new Date(),
  priority: ''
}

export const Test = () => {
  const [values, setvalues] = useState<testing>(initialValues)
  const [testing, setTesting] = useState<Array<any>>([]);  

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setvalues({...values, [name]: value});
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    for (const key in values) {
      const element = `${values[key]}`;
      setTesting(el => [...el, element]);
    }
    console.log(testing);
  }

  return (
    <div>
      <FormControl variant="standard" fullWidth>
        <TextField 
          value={values.title}
          onChange={handleInputChange}
          name="title"
          label="Title"
          variant='outlined'
          required
        />
        <TextField 
          // value={values.description}
          onChange={handleInputChange}
          name='description'
          label='Description'
          required
          multiline
        />

        <FormControl>
          <InputLabel id='priority-label'>Priority</InputLabel>
          <Select 
            labelId='priority-label'
            id='priority'
            value={values.priority}
            name='priority'
            onChange={handleInputChange}
            label='Priority'
            >
            <MenuItem value=""><em>None</em></MenuItem>
            {[1,2,3,4,5].map(e => <MenuItem key={e} value={e}>{e}</MenuItem>)}
          </Select>
        </FormControl>
        <Button variant="outlined" onClick={handleClick}>Submit</Button>
      </FormControl>
      <div>
        {values.title}
        {values.description}
        {values.priority}
      </div>
    </div>
  )
}
