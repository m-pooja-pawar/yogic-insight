import {ApiService} from '../../util/apiService';
import {pageLoader$} from '../../util/pageLoaderHelper';
import {SectionWithHeaderProp} from '../sectionWithHeader/sectionWithHeaderProp';

export function getDefinition(): Promise<{readonly data: SectionWithHeaderProp}> {
  pageLoader$.show();
  return ApiService.getInstance()
    .get<{readonly data: SectionWithHeaderProp}>('/data/definition.json')
    .finally(() => pageLoader$.hide());
}
