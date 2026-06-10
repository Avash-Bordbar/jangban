
function updateStatus(){
document.getElementById('status').textContent=navigator.onLine?'🟢 آنلاین':'🔴 آفلاین';
}
window.addEventListener('online',updateStatus);
window.addEventListener('offline',updateStatus);
updateStatus();
if('serviceWorker' in navigator){navigator.serviceWorker.register('service-worker.js');}
