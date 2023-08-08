import axios, {AxiosResponse} from 'axios';

import {AsanaSequenceList} from '../interface/asanaSequence';

export function getAsanaDetail(asanaDetailToGet: string): Promise<AxiosResponse> {
  const url = `/data/${asanaDetailToGet}.json`;
  return axios.get<{data: AsanaSequenceList}>(url);
}
