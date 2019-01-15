/* Initialize the SDK. */
const SmartyStreetsCore = SmartyStreetsSDK.core;
const Lookup = SmartyStreetsSDK.usAutocomplete.Lookup;
const websiteKey = "1623204754651110"; // AHS API key.
const credentials = new SmartyStreetsCore.SharedCredentials(websiteKey)
const clientBuilder = new SmartyStreetsCore.ClientBuilder(credentials);
const client = clientBuilder.buildUsAutocompleteClient();

/* Bind to DOM elements for future use */
const addressInput = document.getElementById("smartystreets-autocomplete-input");
const candidateOutput = document.getElementById("smartystreets-autocomplete-output");

/* Create an event listener on the input. */
addressInput.addEventListener("input", e => {
	// Get the input value.
	const textInput = e.target.value;

  // Create a new lookup with the input value.
  const lookup = new Lookup(textInput);

  // Add any additional optional configuration to the lookup, eg. filtering, etc.
  // Options for configuring the lookup can be found in the SDK source code:
  // https://github.com/smartystreets/smartystreets-javascript-sdk/blob/master/src/us_autocomplete/Lookup.js
  lookup.stateFilter = ["NY"];
  // lookup.cityFilter = ["New York"];

  // Clear old output to make room for new results.
	candidateOutput.innerHTML = null;

	// Send the lookup with the SDK. The SDK returns a promise.
  client.send(lookup)
    .then(handleResponse)
    .catch(handleError);
});

/*
Do something with the SDK response data. In this case, we pass the data to
another function to append it to the DOM.
*/
function handleResponse(response) {
  response.result.map(buildTextOutput);
}

/* Handle any errors. */
function handleError(response) {
	console.warn(response);
}

function buildTextOutput(candidate) {
	const outputElement = document.createElement("div");
  outputElement.innerHTML = candidate.text;

  candidateOutput.appendChild(outputElement);
}
