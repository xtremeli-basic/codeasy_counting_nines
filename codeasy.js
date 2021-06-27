//Declarations
var i;
var txt = "";
var array = [];

//Functions used
function myFunction(value){
    return value == 9;
}

//Iteration to count to 100
for (i = 0; i <= 100; i++){
    txt +=  i ;
};

//putting the numbers in an array
var txtWithSpace = txt.split("");

//Filtering out the nines
var ninesArray = txtWithSpace.filter(myFunction);

console.log(ninesArray.length);
