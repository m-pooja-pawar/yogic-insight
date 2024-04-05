import {ApiService} from '../../util/apiService';
import {pageLoader$} from '../../util/pageLoaderHelper';
import {MultipleSectionsWithHeaderProp} from '../multipleSectionsWithHeader/multipleSectionsWithHeaderProp';

export function getLimbs(): Promise<{readonly data: MultipleSectionsWithHeaderProp}> {
  pageLoader$.show();
  return ApiService.getInstance()
    .get<{readonly data: MultipleSectionsWithHeaderProp}>('/data/limbs.json')
    .finally(() => pageLoader$.hide());
}
