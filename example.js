import * as SmartyStreetsSDK from "smartystreets-javascript-sdk";

const SmartyStreetsCore = SmartyStreetsSDK.core;
const Lookup = SmartyStreetsSDK.usAutocomplete.Lookup;

// Add your credentials to a credentials object.
let websiteKey = "aa44dd3c-fa98-919a-40b9-a083a34b8840";
let credentials = new SmartyStreetsCore.SharedCredentials(websiteKey)

let clientBuilder = new SmartyStreetsCore.ClientBuilder(credentials);
let client = clientBuilder.buildUsAutocompleteClient();
let lookup = new Lookup("1080 Pasito");

client.send(lookup)
	.then(logSuggestions)
	.catch(handleError);

function logSuggestions(response) {
	console.log(response.result);
}

function handleError(response) {
	console.log(response);
}
