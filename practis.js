// 1.....variable decleration//

var number = 56;
var string = 'naim';
var bollean = true;

//2...2 variable using let,const,..//

let num = 35;
const value = 45;


//3.. simple math operation..+,_,*,/;//

var num1=25;
var num2 =35;
var total = num1 + num2;
console.log('Total number of  ',total);

//4.....Comparison.../

var value1 = 30;
var value2 = 45;
if(value1<value2){
    console.log(true);
}
else{
    console.log(false);
}

//5..Two conditaion...//

var num3 = 30;
var num4 = 40;
if(num3<num4 && num3>num4 || num4 <num3){
    console.log(true);
}
else{
    console.log(false);
}

//6....if..else..//
var value3 = 30;
var value4 = 45;
if(value3<value4){
    console.log(true);
}
else{
    console.log(false);
}
//7..while loop..;///


var i=7;
while(i<=19){
    console.log(i);
    i=i+2;
}
//8...declared an array../

var array =[23.45,89,100];
array.splice(4,0,9)
array.push(20)
array.pop()
console.log(array);
///9..for loop ..every element of array.//

var array2=[20,25,30,35,40,45]
for(var i=0;i<array2.length;i++){
         console.log(array2[i]);
   
}

//...10..print array element number <80..//

var array2=[20,25,30,82,81,85]
for(var i=0;i<array2.length;i++){
    if(array2[i]>80){
         console.log(array2[i]);
    }
   
}
//11...multiplicaton 3 number using function..//

function threeNumMulti(num5,num6,num7){

    var total = num5*num6*num7;
    return total;
}
var result= threeNumMulti(5,5,5);
console.log('the total result',result); 

//.12..declared an object,and change any value..


var student1 ={id:11808017,name :'naim',age:21};

var newStudent1 = Object.assign({},student1,{gender:'m'});
console.log(newStudent1);
