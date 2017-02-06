export function filterNames(names, startsWith){
	var nameArray = [];
	for(var i=0; i<names.length; i++){
		if(names[i].substring(0, startsWith.length) === startsWith)
		{
			nameArray.push(names[i]);
		}
	}
	return nameArray;
}

export function objectFilter(objects, key, searchString) {
	var personList = [];
	for(var i=0; i<objects.length;i++){
		if(objects[i][key] === searchString){
			personList.push(objects[i]);
		}
	}
	return personList;
}

export function compoundObjectFilter(objects, keysString, searchString) {
	var personList = [];
	var keyArray = keysString.split(".");
	for(var i = 0; i<objects.length; i++){
		if(objects[i][keyArray[0]][keyArray[1]] === searchString)
		{
			personList.push(objects[i]);
		}
	}
	return personList;
}
