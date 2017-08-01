const List = require('../db/fakeData.js');

exports.editEntry = function()
{
	let mockData = 
	{ id: '1'
	, firstName: "Hongru"
	, lastName: "Ma"
	, number: "(777) 777-7777"
	, type: "Work"
	}

	let newList = List.generate();
	let editedEntry = 
	{ 
		[ mockData.id ]: 
		{ id: mockData.id
		, firstName: mockData.firstName
		, lastName: mockData.lastName
		, number: mockData.number
		, type: mockData.type
		}
	}
	Object.assign(newList, editedEntry)
	return newList;
}

console.log(editEntry(), '===Edited #1===');