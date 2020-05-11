const functions = require('firebase-functions');

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.sendNotification = functions
  .firestore
  .document('chat/{docID}')
  .onCreate((snap, context) => {
    console.log('execute function')
    console.log('context', context)
    console.log('value', snap.data())
    const newValue = snap.data()
    pushMessage(newValue)
    return 'send notification'
  })

// push notificaction to a topic
function pushMessage(data) {
  const message = "new message: " + data.content
  const payload = {
    notification: {
      from: data.name,
      body: message
    }
  }

  admin.messaging().sendToTopic('probando', payload)
    .then(function (response) {
      console.log('Notification sent successfully:', response);
    })
    .catch(function (error) {
      console.log('Notification sent failed:', error);
    })
}

