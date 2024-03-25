var removeDuplicates = function(nums) {
    let object = {};
    for ( let i = 0 ; i < nums.length; i++){
        if(object[nums[i]] === undefined){
            object[nums[i]] = true;
        }  
    }
    let result = [];
    for ( let key in object ){
        result.push(key)
    }
    return result;
};

let test = [1,1,2,3,5,5,6,7,2,2,2,2,2,2,2,2,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,];

console.log(removeDuplicates(test)); // [1,2]