import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom';

// eslint-disable-next-line import/no-default-export
export default function HathYogaAsana(): JSX.Element {
  const {id} = useParams();
  const {asana} = useParams();
  return (
    <Box>
      {id}
      {asana}
    </Box>
  );
}
