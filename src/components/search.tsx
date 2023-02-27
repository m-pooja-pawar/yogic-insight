import {Autocomplete, TextField} from '@mui/material';
import {Key, useCallback, useEffect, useState} from 'react';
import {To, useNavigate} from 'react-router-dom';

import axios from 'axios';

interface SearchResultItem {
  readonly label: Key;
  readonly routing: To;
}

export function Search(): JSX.Element {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState<SearchResultItem[]>([]);

  const getSearchResult = useCallback(async () => {
    const response = await axios.get('./../../data/search.json');
    if (response && response.data) {
      setSearchResult(response.data.data);
    }
  }, [setSearchResult]);

  useEffect(() => {
    getSearchResult();
  }, [getSearchResult]);

  const handleOnChange = (value: SearchResultItem): void => {
    navigate(value.routing);
  };

  return (
    <Autocomplete
      disableClearable
      disablePortal
      onChange={(_, value: SearchResultItem) => handleOnChange(value)}
      options={searchResult}
      renderInput={(params) => <TextField {...params} label='Search' />}
      size='small'
      sx={{
        width: 280,
      }}
    />
  );
}
