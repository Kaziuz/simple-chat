// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

firebase.initializeApp({
...
})

if ('serviceWorker' in navigator) {
  console.log('oe', process)
  window.addEventListener('load', async () => {


    const regisSW = await navigator
      .serviceWorker
      .register('../firebase-messaging-sw.js', {
        updateViaCache: 'none'
      })

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging()

    regisSW.then(function (registration) {
      firebase.messaging().useServiceWorker(registration)
      console.log('Registration successful, scope is:', registration.scope);
    }).catch(function (err) {
      console.log('Service worker registration failed, error:', err);
    })

  })

  // self.addEventListener('push', function(event) {
  //   console.log('sw', event)
  //   const push = event.data.json();
  //   const title = push.data.title;
  //   const options = JSON.parse(push.data.options);
  //   event.waitUntil(regisSW.showNotification(title, options));
  // });
}