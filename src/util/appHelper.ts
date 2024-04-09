export const isMobile = {
  Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows() {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};

export const isDisplayMode = {
  Browser() {
    return 'Browser' === getDisplayMode();
  },
  StandAlone() {
    return 'Mandi_PWA_App' === getDisplayMode();
  },
};

export function getDisplayMode(): string {
  let displayMode = 'Browser';
  const isInStandaloneMode =
    window.matchMedia('(display-mode: standalone)').matches || document.referrer.includes('android-app://');
  if (isInStandaloneMode) {
    displayMode = 'PWA_App';
  }
  return displayMode;
}

export const currencyFormatter = {
  format(dataToFormat: number) {
    if (dataToFormat && !isNaN(dataToFormat)) {
      return currencyFormatterINR.format(dataToFormat);
    }
    return dataToFormat;
  },
};

export const currencyFormatterINR = Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 3,
});
