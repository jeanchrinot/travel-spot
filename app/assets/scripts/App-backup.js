/*This file is the original copy of the App.js file, used for hypothetical examples*/

import '../styles/styles.css'
import Person from './modules/Person'
if(module.hot){
	module.hot.accept()
}

/*Lesson example code below this line*/

// let john = {
// 	name:"John Doe",
// 	favColor:"blue",
// 	greet:function(){
// 		console.log("Hello, my name is "+john.name+" and my favorite color is "+john.favColor+".");
// 	}
// }

// john.greet();

class Adult extends Person{
	payTaxes(){
		console.log(this.name+" now owes zero taxes.");
	}
}

var john = new Person("John Doe","red");
john.greet();

var jane = new Adult("Jane Smith","green");
jane.greet();
jane.payTaxes();
