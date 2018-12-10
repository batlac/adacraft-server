#!/usr/bin/env js

var CryptoJS = require("crypto-js");

function base64url(source) {
  
  encodedSource = CryptoJS.enc.Base64.stringify(source);  
  encodedSource = encodedSource.replace(/=+$/, '');
  encodedSource = encodedSource.replace(/\+/g, '-');
  encodedSource = encodedSource.replace(/\//g, '_');
  
  return encodedSource;

}


var header = {
  "alg": "HS256",
  "typ": "JWT"
};

var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
var encodedHeader = base64url(stringifiedHeader);

var data = {
  "login": "LeBlaco"
};

var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
var encodedData = base64url(stringifiedData);

var token = encodedHeader + "." + encodedData;

JWT = token + "." + base64url(CryptoJS.HmacSHA256(token, "bricada"));

console.log(JWT);
