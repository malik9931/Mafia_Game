console.log('HI');

var userName  = prompt('plz insert ur name : ');

while (userName === '' || userName === null){

    userName  = prompt('plz insert ur name : ');
}


displayUsername (userName)

function displayUsername (uName){
    alert('Hi '+uName);

}

var makeSandwich = function(bread, meat, cheese) {
    var sandwich = '';
    
    sandwich = sandwich + '<img src="' + bread + '.png">'; 
    sandwich = sandwich + '<img src="' + meat + '.png">'; 
    sandwich = sandwich + '<img src="' + cheese + '.png">'; 
    sandwich = sandwich + '<img src="' + bread + '.png">'; 
    
    return sandwich;
  }

makeSandwich('rye', 'pastrami', 'provalone');

makeSandwich(cheese, meat, bread);

makeSandwich;

makeSandwich();
