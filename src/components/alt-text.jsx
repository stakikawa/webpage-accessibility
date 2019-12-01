require('dotenv').config();
const async = require('async');
const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

function computerVision() {
    async.series([
      async function () {},
      function () {
        return new Promise((resolve) => {
          resolve();
        })
      }
    ], (err) => {
      throw (err);
    });
  }
  
  computerVision();


let key = "INSERT KEY";
let endpoint = "INseRT Endpoint";
if (!key) { throw new Error('Set your environment variables for your subscription key and endpoint.'); }

let computerVisionClient = new ComputerVisionClient(new ApiKeyCredentials({inHeader: {'Ocp-Apim-Subscription-Key': key}}), endpoint);

module.exports.getDescription = 
async function getDescription(describeURL) {
  let caption = await computerVisionClient.describeImage(describeURL);
  return caption.captions[0].text;
};
