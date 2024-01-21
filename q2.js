
function finedMissed (arr){
    var n= arr.length;
    var full = n*(n+1)/2;
    var acctualSum=0;
    for(i=0;i<arr.length;i++){
        acctualSum=acctualSum+arr[i];
    }
    var missedNumber= full-acctualSum;
    console.log(missedNumber);
    return missedNumber;
}
var a= [2,0,3,4]
const nums1 = [3, 0, 1];

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

const nums3 = [0, 1];
finedMissed(a)
finedMissed(nums1)
finedMissed(nums2)
finedMissed(nums3)