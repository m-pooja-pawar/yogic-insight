import {BehaviorSubject} from 'rxjs';

import {LoginResponse} from '../components/login/auth';

import {clearLocalStorage, getToken, setToken, setUserDetail, setUserMenu} from './localStorageHelper';

const isUserLoggedInSubject = new BehaviorSubject(isUserLoggedIn());

export function handleLoginSuccess(data: LoginResponse): void {
  setUserDetail(data.user || null);
  setToken(data.token || null);
  setUserMenu(data.userMenu || null);
  isUserLoggedIn$.set();
}

export function handleLogoutSuccess(): void {
  clearLocalStorage();
  isUserLoggedIn$.set();
}

export function isUserLoggedIn(): boolean {
  const token = getToken();
  if (token && token.trim() != '') {
    return true;
  }
  return false;
}

export const isUserLoggedIn$ = {
  set: () => isUserLoggedInSubject.next(isUserLoggedIn()),
  get: () => isUserLoggedInSubject.asObservable(),
};
