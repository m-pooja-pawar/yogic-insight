import {Autocomplete, TextField} from '@mui/material';
import {useCallback, useEffect, useState} from 'react';

import {SearchResultItem} from '../interface/searchList';
import {getSearchList} from '../services/searchList';
import {useNavigate} from 'react-router-dom';

export function Search(): JSX.Element {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState<SearchResultItem[]>([]);

  const getSearchResult = useCallback(async () => {
    getSearchList().then((response) => {
      if (response && response.data) {
        setSearchResult(response.data.data);
      }
    });
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
