// import * as SmartyStreetsSDK from "smartystreets-javascript-sdk";
// const SmartyStreetsSDK = require('smartystreets-javascript-sdk');
// const SmartyStreetsSDK = require("smartystreets-javascript-sdk");

// const SmartyStreetsCore = SmartyStreetsSDK.core;
// const Lookup = SmartyStreetsSDK.usStreet.Lookup;
//
// // Add your credentials to a credentials object.
// let authId = "aa44dd3c-fa98-919a-40b9-a083a34b8840";
// let authToken = "1S77gUHbZv0KeSw8fX89";
// let credentials = new SmartyStreetsCore.StaticCredentials(authId, authToken);
//
// // Build a client.
// let clientBuilder = new SmartyStreetsCore.ClientBuilder(credentials);
// let client = clientBuilder.buildUsStreetApiClient();
//
// // Create and populate a lookup.
// let lookup1 = new Lookup();
// lookup1.street = "1600 Pennsylvania Ave NW";
// lookup1.zipCode = "20500";
//
// // Send the lookup from the client and handle the response.
// client.send(lookup1)
// 	.then(handleSuccess)
// 	.catch(handleError);
//
// function handleSuccess(response) {
// 	// Log the lookup results to the console.
// 	response.lookups.map(lookup => console.log(lookup.result));
// }
//
// function handleError(response) {
// 	console.log(response);
// }

// // Add your credentials to a credentials object.
const SmartyStreetsCore = SmartyStreetsSDK.core;
const Lookup = SmartyStreetsSDK.usAutocomplete.Lookup;

// Add your credentials to a credentials object.
let websiteKey = "1623204754651110";
let credentials = new SmartyStreetsCore.SharedCredentials(websiteKey)

let clientBuilder = new SmartyStreetsCore.ClientBuilder(credentials);
let client = clientBuilder.buildUsAutocompleteClient();
let lookup = new Lookup("6471 South Cody Way");

client.send(lookup)
	.then(logSuggestions)
	.catch(handleError);

function logSuggestions(response) {
	console.log(response.result);
	$(".address1").html("<select>" + "<option>" + response.result + "</option></select>");
}

function handleError(response) {
	console.log(response);

}

// Event Listener to push address into lookup
$(function() {
    $(".address1").on("input", function() {
				console.log("key pressed")
				lookup = $(".address1").val().trim();
		});
});
