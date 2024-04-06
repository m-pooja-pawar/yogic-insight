import {ApiService} from '../../util/apiService';
import {getSelectedLanguage} from '../../util/localStorageHelper';
import {pageLoader$} from '../../util/pageLoaderHelper';

import {IndexItem} from './indexList';

export function getIndexList(): Promise<{readonly data: readonly IndexItem[]}> {
  pageLoader$.show();
  return ApiService.getInstance()
    .get<{readonly data: IndexItem[]}>(`/data/${getSelectedLanguage()}/index.json`)
    .finally(() => pageLoader$.hide());
}
