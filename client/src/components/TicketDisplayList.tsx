import { Typography } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import { TicketDisplay } from './TicketDisplay'


const SideBar = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  // height: 60,
  height: '325px',
  // height: '100%',
  // width: '225px',
  // width: '155%',
  lineHeight: '60px',
}));

interface IinitailValues {
  [key: string]: any,
  queue: string,
  assignee: string,
  status: string,
  priority: number
}

const initailValues: IinitailValues = {
  queue: '',
  assignee: '',
  status: '',
  priority: 1
}

const TicketDisplayList = () => {
  const [values, setValues] = useState<IinitailValues>(initailValues);

  const handleChange = (e: any) => {
    console.log(e.target);
    // const { id, innerText } = e.target;
    // innerText !== undefined ? setValues({...values, [id.split('-')[0]]: innerText}) : setValues({...values, [id.split('-')[0]]: ''});
    // console.log(values);
  }

  return (
    <Grid container spacing={0} sx={{p: 2, gap: 5, gridTemplateColumns: { md: '1fr 1fr' },}}>
      <Grid item xs={9}>
        {('i').repeat(5).split('').map((e, i) => <TicketDisplay key={i}/>)}
      </Grid>      
      <Grid item xs={1}>
        <SideBar elevation={6} sx={{ position: 'fixed' }}>
          <Typography variant='h4'>
            Filters
          </Typography>
          <Autocomplete
                  disablePortal
                  id="queue"
                  options={['test', 'testing']}
                  sx={{ width: '200px', paddingTop: '10px' }}
                  renderInput={(params) => <TextField {...params} label="Queue" />}
                  onChange={handleChange}
                  // value={}
                />
          <Autocomplete
                  disablePortal
                  id="assignee"
                  options={['test', 'testing']}
                  sx={{ paddingTop: '10px' }}
                  renderInput={(params) => <TextField {...params} label="Assignee" />}
                  onChange={handleChange}
                />
          <Autocomplete
                  disablePortal
                  id="status"
                  options={['test', 'testing']}
                  sx={{ paddingTop: '10px' }}
                  renderInput={(params) => <TextField {...params} label="Status" />}
                />
          <Autocomplete
                  disablePortal
                  id="priority"
                  options={['test', 'testing']}
                  sx={{ paddingTop: '10px' }}
                  renderInput={(params) => <TextField {...params} label="Priority" />}
                />
          
          
        </SideBar>
      </Grid>
    </Grid>
  )
}

export default TicketDisplayList