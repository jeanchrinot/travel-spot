// function Person(fullName,favColor){
// 	this.name = fullName;
// 	this.favoriteColor = favColor;
// 	this.greet = function(){ //"this" refers to the object beeing created
// 		console.log("Hello, my name is "+this.name+" and my favorite color is "+this.favoriteColor+".");
// 	}
// }

/* Using class syntax*/

class Person{
	constructor(name,favColor){
		this.name = name;
		this.favoriteColor = favColor;
	}
	greet(){
		console.log("Hello, my name is "+this.name+" and my favorite color is "+this.favoriteColor+".");
	}
}

export default Person