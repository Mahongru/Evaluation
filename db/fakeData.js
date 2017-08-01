const Chance = require('chance');
const chance = new Chance();

exports.generate = function() {
	let list = {};
	for(var i = 0; i < 3; i++) {
		let entry = {};
		let randomFirstName = chance.name().split(' ')[0];
		let randomLastName = chance.name().split(' ')[0];
		let randomNumber = chance.phone();
		let randomBoolean = chance.bool();
		entry = {
			[i + 1]: {
			id: i + 1,
			firstName: randomFirstName,
			lastName: randomLastName,
			number: randomNumber,
			type: randomBoolean === true ? "Work" : "Cellphone",
			}
		}
		Object.assign(list, entry);
	}
	return list;
};

