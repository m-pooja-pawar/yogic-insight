import {ApiService} from '../../util/apiService';
import {pageLoader$} from '../../util/pageLoaderHelper';

import {IndexItem} from './indexList';

export function getIndexList(): Promise<{readonly data: readonly IndexItem[]}> {
  pageLoader$.show();
  return ApiService.getInstance()
    .get<{readonly data: IndexItem[]}>('/data/index.json')
    .finally(() => pageLoader$.hide());
}
