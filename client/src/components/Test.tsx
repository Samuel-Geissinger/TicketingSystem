import { Alert, AlertTitle, Box, Button, FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

interface testing {
  [key: string]: any,
  title: string,
  description: string,
  createdDate: Date,
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
  const [testing, setTesting] = useState<any>('');

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setvalues({...values, [name]: value});
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    fetch('http://192.168.1.239:5143/api/Ticket', { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(values) })
    .then(data => {
      data.ok ? 
      setTesting((<Alert severity="success" onClose={() => {setTesting('')}}><AlertTitle><strong>Success</strong></AlertTitle>You have successfully submited the content</Alert>))
      :
      setTesting((<Alert severity="error" onClose={() => {setTesting('')}}><AlertTitle><strong>Error</strong></AlertTitle>There was an error sending the content</Alert>)) 
    })
  }

  return (
    <form>
      <FormControl variant="standard" fullWidth>
        <TextField
          error={values.title === ''}
          helperText={values.title === "" ? 'There are no values' : ' '}
          value={values.title}
          onChange={handleInputChange}
          name="title"
          label="Title"
          variant='outlined'
          required
        />
        <TextField 
          error={values.description === ''}
          helperText={values.description === "" ? 'There are no values' : ' '}
          value={values.description}
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
            {/* <MenuItem value=""><em>None</em></MenuItem> */}
            {[1,2,3,4,5].map(e => <MenuItem key={e} value={e}>{e}</MenuItem>)}
          </Select>
        </FormControl>
        <Button variant="outlined" onClick={handleClick} type="submit">Submit</Button>
      </FormControl>
      <div>
        {values.title}
        {values.description}
        {values.priority}
      </div>
      <div>
        {testing}
      </div>
    </form>
  )
}
