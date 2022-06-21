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
        // [3, -1, -5, -5, 2,4,7,5,1,1,1,4]
        if(i == 0){
            if(arr[i] > arr[i+1]){      // jika index saat ini lebih besar dari index selanjutnya 
                count++;                // count + 1
                console.log(count, i)
            }
        }
        else if(arr[i] == arr[arr.length - 1]){ // jika nilai array index ke i sama dengan nilai array index terakhir
            if(arr[i] > arr[i-1]){
                count++;
                console.log(count, i)
            }
        }
        else{
            if(arr[i] > arr[i+1] && arr[i] < arr[i-1]){
                count++;
                console.log(count, i)
            }
        }
    }
    return count;
}

console.log(hillOrValley([3, -1, -5, -5, 2, 4,7,5,1,1,1,4]));