import {Autocomplete, TextField} from '@mui/material';
import {useCallback, useEffect, useState} from 'react';

import axios from 'axios';

export function SearchAsana(): JSX.Element {
  const [asanaList, setAsanaList] = useState([]);

  const getAsanaList = useCallback(async () => {
    const response = await axios.get('./../../data/searchAsana.json');
    if (response && response.data) {
      setAsanaList(response.data.data);
    }
  }, [setAsanaList]);

  useEffect(() => {
    getAsanaList();
  }, [getAsanaList]);

  return (
    <Autocomplete
      disablePortal
      id='searchAsana'
      options={asanaList}
      renderInput={(params) => <TextField {...params} label='Search Yoga Pose' />}
      sx={{width: 300}}
    />
  );
}
