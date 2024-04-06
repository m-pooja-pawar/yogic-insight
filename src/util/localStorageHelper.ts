export function setUserDetail(userData: any | null): void {
  localStorage.setItem('user', JSON.stringify(userData));
}

export function getUserDetail(): any | null {
  const data = localStorage.getItem('user');
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

export function setToken(token: string | null): void {
  if (token) {
    localStorage.setItem('token', token);
  }
}

export function getToken(): string | null {
  return localStorage.getItem('token');
}

export function setUserMenu(userMenu: readonly any[] | null): void {
  if (userMenu) {
    localStorage.setItem('userMenu', JSON.stringify(userMenu));
  }
}

export function getUserMenu(): readonly any[] | null {
  const data = localStorage.getItem('userMenu');
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

export function getApiAuthorization(): string | null {
  const token = getToken();
  if (token) {
    return 'Bearer ' + token;
  }
  return null;
}

export function setSelectedLanguage(selectedLanguage: string | null): void {
  if (selectedLanguage) {
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }
}

export function getSelectedLanguage(): string {
  const language = localStorage.getItem('selectedLanguage');
  return language || 'en';
}

export function setNextRedirectionUrl(nextRedirectionUrl: string | null): void {
  if (nextRedirectionUrl) {
    localStorage.setItem('nextRedirectionUrl', nextRedirectionUrl);
  } else {
    localStorage.removeItem('nextRedirectionUrl');
  }
}

export function getNextRedirectionUrl(): string | null {
  return localStorage.getItem('nextRedirectionUrl');
}

export function setSessionExpired(sessionExpired: string | null): void {
  if (sessionExpired) {
    localStorage.setItem('sessionExpired', sessionExpired);
  } else {
    localStorage.removeItem('sessionExpired');
  }
}

export function getSessionExpired(): string | null {
  return localStorage.getItem('sessionExpired');
}

export function clearLocalStorage(): void {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}

export function checkTokenChange(e: StorageEvent): boolean {
  if (e.key === 'token') {
    return true;
  }
  return false;
}
