import {ApiService} from '../../util/apiService';
import {getSelectedLanguage} from '../../util/localStorageHelper';
import {pageLoader$} from '../../util/pageLoaderHelper';

import {SearchResultItem} from './searchList';

export function getSearchList(): Promise<{readonly data: readonly SearchResultItem[]}> {
  pageLoader$.show();
  return ApiService.getInstance()
    .get<{readonly data: SearchResultItem[]}>(`/data/${getSelectedLanguage()}/search.json`)
    .finally(() => pageLoader$.hide());
}
