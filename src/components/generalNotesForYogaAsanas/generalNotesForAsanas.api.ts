import {ApiService} from '../../util/apiService';
import {pageLoader$} from '../../util/pageLoaderHelper';
import {MultipleSectionsWithHeaderProp} from '../multipleSectionsWithHeader/multipleSectionsWithHeaderProp';

export function getGeneralNotesForAsanas(): Promise<{readonly data: MultipleSectionsWithHeaderProp}> {
  pageLoader$.show();
  return ApiService.getInstance()
    .get<{readonly data: MultipleSectionsWithHeaderProp}>('/data/generalNotesForAsanas.json')
    .finally(() => pageLoader$.hide());
}
