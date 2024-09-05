const { getFirestore } = require('firebase-admin/firestore')
// FIRESTORE INFO
const db = getFirestore()
console.info('Firestore listo!')

module.exports = db
