const axios = require('axios');

// function main(){
//     fetch("https://jsonplaceholder.typicode.com/todos/55")
//     .then(async(response)=>{
//         const data = await response.json();
//         console.log(data)
//     })
// }
// main();

//better approach ==
// async function main(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const data = await response.json()
//     console.log(data);
// }
// main();




//axios--- external library
async function main(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/5")
    console.log(response.data.title);
}
main()