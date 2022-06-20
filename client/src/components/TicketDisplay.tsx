import { Autocomplete, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import React from 'react'

interface ticket {
  id: string,
  isOpen: boolean,
  title: string,
  description: string,
  createdDate: Date,
  closedDate: Date,
  priority: number,
  status: string
}

interface queue {
  id: string,
  title: string
}

interface users {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  isActive: boolean,
  createdDate: Date,
}

export const TicketDisplay = ({...props}) => {
  
  const users = [
    'Samuel Geissinger',
    'William Geissinger',
    'Bethany Geissinger',
    'Rhonda Geissinger',
    'Ashley Epley',
    'Eric Epley',
    'Lola Epley',
    'Knox Epley',
  ]

  const queues = [
    'Tier 1',
    'Tier 2',
    'Tier 3',
    'Application Deveopment',
  ]

  const status = [
    'Open',
    'Closed',
    'Pending',
  ]

  const priority = [
    'Low',
    'Medium',
    'High',
  ]
  return (
    <div className='my-1' style={{marginTop: '1rem'}}>


      <Card sx={{ minWidth: 800, maxWidth: 1000 }} variant="outlined">
        <CardContent>
          <div className='flex justify-around' style={{ justifyContent: 'space-between' }}>
            <div className='flex flex-col' >
              <Typography variant="h5" component="div">
                Ticket Name
              </Typography>
              
              <Autocomplete
                disablePortal
                id="assignee"
                options={users}
                sx={{ width: 300, paddingTop: '10px' }}
                renderInput={(params) => <TextField {...params} label="Users" />}
              />

              <Autocomplete
                disablePortal
                id="assignee"
                options={queues}
                sx={{ width: 300, paddingTop: '10px' }}
                renderInput={(params) => <TextField {...params} label="Queue" />}
              />
            </div>

            <div className='flex flex-col justify-end' style={{justifyContent: 'end', marginLeft: '10px'}} >
              <Autocomplete
                disablePortal
                id="assignee"
                options={priority}
                sx={{ width: 300, paddingTop: '10px' }}
                renderInput={(params) => <TextField {...params} label="Priority" />}
              />
              
              <Autocomplete
                disablePortal
                id="assignee"
                options={status}
                sx={{ width: 300, paddingTop: '10px' }}
                renderInput={(params) => <TextField {...params} label="Status" />}
              />
            </div>
          </div>



        </CardContent>
        <CardActions>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </div>
  )
}
