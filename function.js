//..1..Convartion..//

function feetToInce(number){

    var ince = number/12;
    return ince;
}
var total = feetToInce(60);
console.log('Ince of  ',total);

//..2..Convartion cm.to..M;

function centimeterToMiter(number){

    var meter = number/100;
    return meter;
}
var total = centimeterToMiter(60);
console.log('meter of  ',total);

//..3..Calculation.//

function pageRequirment( book1,book2,book3){

var pageOf1 =book1*100;
var pageOf2 =book2*200;
var pageOf3 =book3*300;
var total = pageOf1+pageOf2+pageOf3;
return total;

}
var result = pageRequirment(2,3,4);
console.log('Total pagese',result);

//..print longest string of array..

function bestFriend(arr){
    var max = 0;
    var longest;
    for( var i=0; i< arr.length;i++)
    {
        if(arr[i].length>max){
            var max = arr[i].length;
            longest = arr[i];
        }
    }
return longest;
}

var array =['naim','nil','tamim','nasima'];
var result =bestFriend(array);
console.log(result);

//... 5...stope array for negative number;

function onlyPositivem(number){

for( var i=0;i<number.length;i++){
    var newv= (number[i]);
    if(array[i]<0){
        break; 
    }
}
return newv;
}
var array = [20,22,30,34,-56,10,20,30];
var result = onlyPositivem(array);
console.log(result);



var array = [20,22,30,34,-56,10,20,30];
for( var i=0;i<array.length;i++){
    console.log(array[i]);
    if(array[i]<0){
        break;
    }
}