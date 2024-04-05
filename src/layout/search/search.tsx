import {Autocomplete, TextField} from '@mui/material';
import {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {SearchResultItem} from './searchList';
import {getSearchList} from './searchList.api';

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
      getOptionLabel={(option: SearchResultItem) =>
        `${option.label} ${option.label_en ? '(' + option.label_en + ')' : ''}`
      }
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
