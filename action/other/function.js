const spin = require('spinnies')

const spinner = { 
  "interval": 120,
  "frames": [
    "Y",
    "YT",
    "YT ",
    "YT R",
    "YT Rz",
    "YT RzL",
    "YT RzLM",
    "YT RzLMo",
    "YT RzLMod",
    "YT RzLModz",
    "YT RzLModz ",
    "YT RzLModz ☠☠☠"
  ]}

let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
	spins.add(id, {text: text})
	}
const waiting = (id, text) => {
	spins.add(id, {text: text})
	}	
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

	}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

module.exports = { start, waiting, close, success }