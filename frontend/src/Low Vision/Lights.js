import * as React from 'react';
import Switch from '@mui/material/Switch';
import { Stack } from '@mui/material';

export default function Lights() {
  return (
    <Stack 
      direction="column" 
      spacing={2} 
      alignItems="flex-start" 
      style={{ width: '100%' }} // Ensure it stretches to the full width
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ fontSize: '20pt' }}>Living Room</div>
        <Switch />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ fontSize: '20pt' }}>Bedroom</div>
        <Switch />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ fontSize: '20pt' }}>Dining Room</div>
        <Switch />
      </div>
    </Stack>
  );
}
