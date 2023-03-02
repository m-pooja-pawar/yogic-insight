import axios, {AxiosResponse} from 'axios';

import {SearchResultItem} from '../interface/searchList';

export function getSearchList(): Promise<AxiosResponse> {
  return axios.get<{data: SearchResultItem[]}>('./../../data/search.json');
}
