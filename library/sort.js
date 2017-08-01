const List = require('../db/fakeData.js');

exports.alphabeticalSort = function(type = 0)
{
	let sortType = type === 0 ? 'lastName' : type === 1 ? 'firstName' : 'lastName';
	let newList = List.generate();

	let sortable = [];
	
	for (var entry in newList)
	{
		sortable.push([entry, newList[entry]])
	}

	sortable.sort(
		function(a, b)
		{
			var x = a[1][sortType].toLowerCase();
			var y = b[1][sortType].toLowerCase();
			return x < y ? -1 : x > y ? 1 : 0;
		}
	);

	let sorted = sortable.map(entry => entry[1]);
	return sorted;
}

console.log(alphabeticalSort(0));
console.log(alphabeticalSort(1));