//controllo della lingua
var titolo= "📷Yesterday is back!⌛"; 
var desc="Your memories from yesterday are now available for viewing. Enjoy reliving the past!";
function lingua() {let lang = navigator.language || navigator.userLanguage; if (lang.indexOf("it") === 0) {titolo= "📷Ricordi sbloccati!⌛"; desc="I tuoi ricordi di ieri sono disponibili per la visualizzazione. Ripercorri i momenti passati!";}}

// Notifica dopo 24h
function notifica(){lingua(); setTimeout(function() {self.registration.showNotification(titolo, {body: desc, icon: 'https://cxrlodesign.com/favicon-captus.svg', data: {link: 'https://botte.ml/test'}});}, 24*60*60*1000);}

self.addEventListener('notificationclick', function(event) {event.notification.close();var link = event.notification.data.link;event.waitUntil(clients.openWindow(link));});

self.addEventListener('message', function(event) {if (event.data.action === 'notifica') {notifica();}});
    

