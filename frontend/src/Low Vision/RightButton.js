import * as React from 'react';
import { Button, Stack, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function RightButton() {
  const navigate = useNavigate();
  const [voiceOn, setVoiceOn] = React.useState(false);

  return (
    <Stack 
      spacing={4} 
      alignItems="center" 
      justifyContent="center" 
      style={{ height: '100vh' }}
    >
      {/* Navigation Buttons */}
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

      {/* Voice Recognition Toggle */}
      <Box 
        onClick={() => setVoiceOn(!voiceOn)}
        sx={{
          width: '300px',
          height: '80px',
          backgroundColor: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: '8px',
        }}
      >
        <Typography color="white" fontSize="20px" fontWeight="bold">
          Voice Recognition: {voiceOn ? 'On' : 'Off'}
        </Typography>
      </Box>
    </Stack>
  );
}
