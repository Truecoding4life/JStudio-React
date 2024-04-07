var removeElement = function(nums, val) {
    let n = nums.length - 1;
    while( n >= 0){
        if(nums[n] === val){
            nums.splice(n, 1);
        }
        else{
            n--;

        }
    }


  
    return nums
};

const nums = [0,1,2,2,3,0,4,2]
const val = 2;

console.log(removeElement(nums, val));