const List = require('../db/fakeData.js');

exports.addEntry = function()
{
	let mockData = 
	{	firstName: "Hongru"
	, lastName: "Ma"
	, number: "(777) 777-7777"
	, type: "Work"
	}

	let newList = List.generate();
	let id = Object.keys(newList).length + 1;
	let newEntry = {
		[ id ]: 
		{ id
		, firstName: mockData.firstName
		, lastName: mockData.lastName
		, number: mockData.number
		, type: mockData.type
		}
	}
	Object.assign(newList, newEntry)
	return newList;
}