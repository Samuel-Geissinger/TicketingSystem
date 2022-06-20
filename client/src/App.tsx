import { Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import { TicketDisplay } from './components/TicketDisplay';
interface Temp {
  date: string,
  summary: string
}

function App() {
  const [weather, setWeather] = useState<Array<Temp>>([]);  

  useEffect(() => {
    fetch('http://localhost:5143/WeatherForecast')
    .then(r => r.json())
    .then(json => setWeather(json));
  }, [])
  
  
  return (
    <div className='flex flex-col justify-evenly' style={{ justifyContent: 'space-around' }}>
      <div className='flex flex-row justify-evenly' style={{ justifyContent: 'space-around' }}>
        <Card sx={{ maxWidth: 275, minWidth: 275 }} variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              {/* be{bull}nev{bull}o{bull}lent */}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 275, minWidth: 275 }} variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              {/* be{bull}nev{bull}o{bull}lent */}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 275, minWidth: 275 }} variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              {/* be{bull}nev{bull}o{bull}lent */}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>


        <Paper variant='outlined' elevation={3} square> 
          <Typography color='text.secondary'>
            Amount of open tickets:
          </Typography>
          <Typography>
            {}
          </Typography>
        </Paper>
      
      
      </div>
      
      
      <div>
        <Typography variant='h4' component='div' gutterBottom style={{marginTop: '1rem'}}>
          Assigned Tickets:
        </Typography>
        
        
        
        <div className='flex flex-col justify-around'>
          <TicketDisplay />

        </div>
      </div>
    </div>
  );
}

export default App;
