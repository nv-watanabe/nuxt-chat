/*
firebase.jsonにて、
デフォルトのホスト先（public）ではなく、firebaseBasicAuthを参照するようrewritesすること
*/
const functions = require("firebase-functions");
const express = require("express");
const basicAuth = require("basic-auth-connect");

// Basic認証のID、PASS設定
const USERNAME = "nabe-chan";
const PASSWORD = "0601";

// Basic Auth
const app = express();
app.use(basicAuth(USERNAME, PASSWORD));

// functions/dist を読み込むよう設定
app.use(express.static(__dirname + "./dist/"));
exports.firebaseBasicAuth = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
