const FormData = require('form-data');
const fetch = require('node-fetch');
const formData = new FormData();
formData.append('file','');
const basePath = process.cwd();
const fs = require("fs");

let url = 'https://api.nftport.xyz/v0/files';

let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: '3e43e150-f80a-4ca6-a225-48cf4d154e2f',
    'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
  }
};

options.body = formData;

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));