if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/yogic-insight/sw.js', { scope: '/yogic-insight/' })})}