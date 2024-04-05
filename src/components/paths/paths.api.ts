import {ApiService} from '../../util/apiService';
import {pageLoader$} from '../../util/pageLoaderHelper';
import {MultipleSectionsWithHeaderProp} from '../multipleSectionsWithHeader/multipleSectionsWithHeaderProp';

export function getPaths(): Promise<{readonly data: MultipleSectionsWithHeaderProp}> {
  pageLoader$.show();
  return ApiService.getInstance()
    .get<{readonly data: MultipleSectionsWithHeaderProp}>('/data/paths.json')
    .finally(() => pageLoader$.hide());
}
