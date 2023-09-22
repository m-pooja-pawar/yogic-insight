import axios, {AxiosResponse} from 'axios';

import {MultipleSectionsWithHeaderProp} from '../interface/multipleSectionsWithHeaderProp';

export function getGeneralNotesForAsanas(): Promise<AxiosResponse> {
  return axios.get<{data: MultipleSectionsWithHeaderProp}>('/data/generalNotesForAsanas.json');
}
