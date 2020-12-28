const express = require('express');
const bodyParser = require("body-parser");

require('dotenv').config()
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const knex = require('knex')(require('./knexfile')[process.env.NODE_ENV]);

app.use(bodyParser.json())
app.use(cors());






// MOVING TO POSTGRESQL ON COMPUTER INSTEAD OF FIREBASE
// exports.getFlightCodes = functions.https.onRequest(async (req, res) => {
//   Cors(req, res, async () => {
//     res.set('Access-Control-Allow-Origin', "*")
//     res.set('Access-Control-Allow-Methods', 'GET')
//     const collection = db.collection('squadron');
//     const snapshot = collection.get();
//
//     if ((await snapshot).empty) {
//       res.status(400).send({result: false, message: "data does not exist"});
//     }
//     let output = [];
//     (await snapshot).forEach(async doc => {
//       output.push(doc.id);
//     })
//
//     res.status(200).send({flights: output});
//   });
// })
//
// rt.get('/:id', async(req, res) => {
//   Cors(req, res, async () => {
//     const collectionRef = await db.collection('squadron');
//     const airmenCollection = await collectionRef.doc(req.params.id).collection('airmen').get();
//
//     let output = [];
//     airmenCollection.forEach(async airman => {
//       output.push({airmanId: airman.id, airmanData: airman.data()});
//     })
//
//     res.status(200).send({ result: output});
//   })
// })
//
// exports.getAirmen = functions.https.onRequest(rt);
//
// rt.post('/:id', async (req, res) => {
//   Cors(req, res, async () => {
//     res.set('Access-Control-Allow-Origin', "*")
//     res.set('Access-Control-Allow-Methods', 'POST')
//     const newAirman = req.body;
//     await db.collection('squadron').doc(req.params.id).collection('airmen').add(newAirman);
//     res.status(201).send({result: "User added succefully"});
//   })
// })
//
// exports.addAirman = functions.https.onRequest(rt);
//
// rt.put('/:flight/:id', async (req, res) => {
//   Cors(req, res, async () => {
//     const updateAirman = req.body;
//     await db.collection('squadron').doc(req.params.flight).collection('airmen').doc(req.params.id).update(updateAirman);
//     res.status(200).send({ result: true, message: "Update completed!"})
//   })
// })
//
// exports.updateAirman = functions.https.onRequest(rt);
//
// rt.delete('/:flight/:id', async (req, res) => {
//   Cors(req, res, async () => {
//     await db.collection('squadron').doc(req.params.flight).collection('airmen').doc(req.params.id).delete();
//     res.status(200).send({ result: true, message: "User deleted successfully"})
//   })
// })
//
// exports.deleteAirman = functions.https.onRequest(rt);

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
