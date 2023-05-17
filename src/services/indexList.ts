import axios, {AxiosResponse} from 'axios';

import {IndexItem} from '../interface/indexList';

export function getIndexList(): Promise<AxiosResponse> {
  return axios.get<{data: IndexItem[]}>('/data/index.json');
}
