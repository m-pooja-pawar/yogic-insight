import {BehaviorSubject} from 'rxjs';

const isPageLoading = new BehaviorSubject(false);

export const pageLoader$ = {
  show: () => isPageLoading.next(true),
  hide: () => isPageLoading.next(false),
  get: () => isPageLoading.asObservable(),
};
