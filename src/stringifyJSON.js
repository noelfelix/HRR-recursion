// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  var isValid = function(obj){
  	return !(typeof obj === 'function' || typeof obj ==='undefined');
  };

  var process = function(obj){
  	var type = typeof obj;
  	if(isValid(obj)){
	  	if(type === "number"){
	  		if(obj !== obj){
	  			return "NaN"
	  		}
	  		return obj + '';
	  	} else if(type === "string"){
	  		return '"' + obj + '"';
	  	} else if(type === "boolean"){
	  		return obj ? "true" : "false";
	  	} else if(obj === null){
	  		return "null";
	  	} else if(Array.isArray(obj)){
	  		return processArray(obj);
	  	} else {
	  		return processObject(obj);
	  	}
	  } else {
	  	return '';
	  }
  };

  var processArray = function(array){
  	var arrayString = '[';
  	var i = 0;
  	var length = array.length;
  	for(i; i < length; i++){
  		if(i + 1 === length){
  			if(isValid(array[i])){
  				arrayString += process(array[i]);
  			}
  		} else {
  			if(isValid(array[i])){
  				arrayString += process(array[i]) + ',';
  			}
  		}
  	}
  	return arrayString += ']';
  };

  var processObject = function(object){
  	var objectString = '{';
  	var count = 0;
  	for(var key in object){
  		if(isValid(object[key])){
  			count++;
  			objectString += '"' + key + '"' + ':' + process(object[key]) + ',';
  		}
  	}
  	if(count > 0){
  		return objectString.slice(0,objectString.length - 1) + "}";
  	}
  	return objectString += '}';
  };

  return process(obj);
};
