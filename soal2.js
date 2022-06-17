// Please create a function that will count how many castle that you can build. 
// It has 1 parameter which is an array of numbers as the land height per 1 block length.
// Details:
// F(X)
// X=[n],when n is an Integer (-2,147,483,648to2,147,483,647)
// Additional rules:
// a. You only can build a castle on a hill or a valley.
// b. Hill contains block(s) with the height is taller than the neighbors blocks.
// c. Valley contains block(s) with the height is shorter than the neighbors blocks.
// d. Incomplete hill or valley at the first and the last block, still can be used to build a 
// castle(considered as hill or valley)
// e. Your function just need to count, no need to draw.
function hillOrValley(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(i == 0){
            if(arr[i] > arr[i+1]){
                count++;
            }
        }
        else if(i == arr.length-1){
            if(arr[i] > arr[i-1]){
                count++;
            }
        }
        else{
            if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
                count++;
            }
        }
    }
    return count;
}

console.log(hillOrValley([12,2,3,4,5,6,7,8,9,10]));

