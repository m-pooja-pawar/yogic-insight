import axios, {AxiosResponse} from 'axios';

import {MultipleSectionsWithHeaderProp} from '../interface/multipleSectionsWithHeaderProp';

export function getPaths(): Promise<AxiosResponse> {
  return axios.get<{data: MultipleSectionsWithHeaderProp}>('./../../data/paths.json');
}
