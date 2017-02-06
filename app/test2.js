export function capitalise(names){
	for (var i=0; i<names.length; i++)
	{
		names[i] = names[i].toUpperCase();
	}
	return names;
}

export function extractValue(objects, key) {
	var values = [];
	for (var i=0; i<objects.length; i++)
	{
		values[i] = objects[i][key];
	}
	return values;
}

export function extractCompoundValue(objects, keysString) {
	var values = [];
	var keyArray = keysString.split(".");
	for(var i = 0; i<objects.length; i++){
		values[i] = objects[i][keyArray[0]][keyArray[1]];
	}
	return values;
}
