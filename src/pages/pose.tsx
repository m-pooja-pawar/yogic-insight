import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom';

// eslint-disable-next-line import/no-default-export
export default function Pose(): JSX.Element {
  const {id} = useParams();
  return <Box>{id}</Box>;
}
