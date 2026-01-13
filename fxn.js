// const input = [1, 2, 3, 4, 5 ];

// const newArray = [];
// for(let i=0; i<input.length; i++){
//     newArray.push(input[i]*2)
// }

// console.log(newArray);



//better approach--map
// const value = [1, 2, 3, 4, 5]
// function transform(b){
//      return b*3}
// const ans = value.map(transform);
// console.log(ans);


//   const input = [1,2,3,4,5,6,7,8,9]
//   const newArr = [];
//   for(let i = 0; i<input.length; i++){
//     if(input[i] % 2 !=  0){
//           newArr.push(input[i]*5)
//     }
//   }
//   console.log(newArr)
// better approach ---filter
const arr = [1,2,3,4,5,6,7,8,9];
function filterLogic(n){
    if(n % 2 == 0){
        return true;
    } else {
        return false;
    }
}
const ans = arr.filter(filterLogic);
console.log(ans)