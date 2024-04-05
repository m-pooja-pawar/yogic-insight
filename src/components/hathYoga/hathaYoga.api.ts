import {ApiService} from '../../util/apiService';
import {pageLoader$} from '../../util/pageLoaderHelper';
import {SectionWithHeaderProp} from '../sectionWithHeader/sectionWithHeaderProp';

export function getHathaYogaData(): Promise<{readonly data: SectionWithHeaderProp}> {
  pageLoader$.show();
  return ApiService.getInstance()
    .get<{readonly data: SectionWithHeaderProp}>('/data/hathaYoga.json')
    .finally(() => pageLoader$.hide());
}
