import * as React from 'react';
import { Button, Stack, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddWidget from "../AddWidget";
export default function Shortcuts() {
  const navigate = useNavigate();
  const [voiceOn, setVoiceOn] = React.useState(false);

  const sizing = {
    
   
    width: "100%"  , 
  };
  return (
    <Stack 
      spacing={4} 
      alignItems="center" 
      justifyContent="center" 
      style={{ height: '100vh' }}
    >
      {/* Navigation Buttons */}
      <div style={{width: "100%"}}>
        <AddWidget />
      </div>

      <Button 
        variant="contained" 
        color="primary" 
        size="large" 
        style={{ width: '300px', height: '80px', fontSize: '20px' }} 
        onClick={() => navigate('/device-manager')}
      >
        Device Manager
      </Button>

      <Button 
        variant="contained" 
        color="primary" 
        size="large" 
        style={{ width: '300px', height: '80px', fontSize: '20px' }} 
        onClick={() => navigate('/routine-scheduler')}
      >
        Routine Scheduler
      </Button>

      
    </Stack>
  );
}
