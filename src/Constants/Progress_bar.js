import { Progress, Stack } from '@chakra-ui/react';

function ProgressBar({ value, max, colorScheme }) {
  const percentage = ((value / max) * 100).toFixed(0); // Calculate the percentage
  const positionOffset = -40; // Adjust this value to control the vertical position of the percentage display

  // Calculate the position of the percentage display based on the max value
  const percentagePosition = `${((max - value) / max) * 100 - positionOffset}%`;

  return (
    <Stack position="relative" spacing={1}>
      <Progress value={value} colorScheme={colorScheme} max={max} />
      <div
        style={{
          position: 'absolute',
          top:  8,
          left: percentagePosition ,
          right: '0',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#EAB308', 
        }}
      >{`${percentage}%`}</div>
    </Stack>
  );
}

export default ProgressBar;
