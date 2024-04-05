import {ApiService} from '../../util/apiService';
import {pageLoader$} from '../../util/pageLoaderHelper';
import {AsanaSequenceList} from '../asanaSequence/asanaSequenceProp';

export function getAsanaDetail(asanaDetailToGet: string): Promise<{readonly data: AsanaSequenceList}> {
  pageLoader$.show();
  const url = `/data/${asanaDetailToGet}.json`;
  return ApiService.getInstance()
    .get<{readonly data: AsanaSequenceList}>(url)
    .finally(() => pageLoader$.hide());
}
