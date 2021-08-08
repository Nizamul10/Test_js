// 1. SEER  TO MON.

function seerToMon(seer){

    var mon = seer/40;
    return mon;
}
 var total = seerToMon(60);
 console.log(total);



// 2.TOTAL SALES OF PRODUCT.

function totalSales(shirt,pant,shose){

    var shirtCost = shirt*100;
    var pantCost = pant*200;
    var shoseCost = shose*500;
    var totalCost = shirtCost+pantCost+shoseCost;
    return totalCost;
    }
    var result = totalSales(2,3,4);
    console.log(result);



// 3.TOTAL DELIVERY COST.

function deliveryCost(number){

    if(number<=100){
        var cost = number*100;
    }
    if (number>100 && number<=200){
        var cost = ((number-100)*80)+(100*100);
    }
    if( number>200 && number<=10000) {
        var cost = (number-200)*50+(100*80)+(100*100);
    }
    return cost;
}
 var total = deliveryCost(101);
 console.log(total);



// 4.PRINT 5 LENGTH FRIEND NAME.

   function  perfectFriend(array) {    
    for (var i=0; i<array.length; i++){
        var arrayString = array[i];
        if(arrayString.length == 5) {
        return arrayString; 
       }
    } 
  }
    var array = ['naim','tamim','nil','nasima'];
    var result = perfectFriend(array);
    console.log(result);
