const Alexa = require('alexa-sdk');

const helpMessage = "You can ask me to pick a number between a range you give. For example you can say 'give me a number between 1 and 10'. Negative numbers are not allowed.";
const welcomeMessage = "Hello, welcome to the random number generator. From what range do you want me to pick a number from? Negative numbers are not allowed.";
const welcomeRepromt = "You can ask me to pick a number between a range of numbers.";
const goodbyeMessage = "Good bye. Have a great day!";

const handlers = {
	'getNumber': function () {
		var begin = parseInt(this.event.request.intent.slots.begin.value);
		var end = parseInt(this.event.request.intent.slots.end.value);
		if (isNaN(begin) || isNaN(end)) {
			this.emit(':tell', 'Hmm, something went wrong. Make sure you are not using negative numbers and try again.')
		}

		if (begin > end) {
			var temp = begin;
			begin = end;
			end = temp;
		}

		var selected = Math.floor(Math.random() * (end - begin + 1)) + begin;
		this.emit(':tell', selected);
	},
	'AMAZON.StopIntent': function () {
		this.emit(':tell', goodbyeMessage);
	},
	'AMAZON.HelpIntent': function () {
		this.emit(':tell', helpMessage);
	},
	'AMAZON.CancelIntent': function () {
		this.emit(":tell", goodbyeMessage);
	},
	'SessionEndedRequest': function () {
		this.emit('AMAZON.StopIntent');
	},
	'Unhandled': function () {
		this.emit(':tell', helpMessage);
	}
};

exports.handler = function (event, context, callback) {
	let alexa = Alexa.handler(event, context);
	alexa.registerHandlers(handlers);
	alexa.execute();
};