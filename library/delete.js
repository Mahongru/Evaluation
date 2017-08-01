const List = require('../db/fakeData.js');

exports.deleteEntry = function(id) {
	let newList = List.generate();
	delete newList[id];
	return newList;
}

console.log(deleteEntry('1'), '===Deleted #1===');
