import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom';

export function Pose(): JSX.Element {
  const {id} = useParams();
  return <Box>{id}</Box>;
}
