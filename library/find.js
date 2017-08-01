const List = require('../db/fakeData.js');
const addEntry = require('./add.js').addEntry();

const findEntry = function()
{	
	let result = {};
	Object.keys(addEntry).forEach((entry) => {
		if (addEntry[entry].number === '(777) 777-7777')
		{
			result = addEntry[entry];
		}
	})

	return result;
}

console.log(findEntry());