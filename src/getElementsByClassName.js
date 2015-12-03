// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var results = [];
	(function traverse(parent){
		for(var i = 0; i < parent.length; i++){
			traverse(parent[i].childNodes);
			var classes = parent[i].classList;
			if(classes && classes.length){
				for(var j = 0; j < classes.length; j++){
					if(classes[j] === className){
						results.unshift(parent[i]);
					}
				}
			}
		}
	})(document.childNodes);
	return results;
};
