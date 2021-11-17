//Difference between Labirary and FrameWork;

//Library : Some predefined methods/code  for reusing it.
//Framework : Framework is a Skeloton of a project that how it should run and contains many libraries.


// Angular: Angular is a Framework.
// ReactJs: React is Library, more faster than Angular, containing Some advanced property,consumes less time And to make page DynamicsCompressorNode.Angular


//Spread

// const Arr =[10,20,30,40,50,60];
// const newArr=[...Arr]; //deep copy
// console.log(newArr);
// const newArr=Arr;
// console.log(newArr);



// function Add(a,b,c,d,e){
//     return a+b+c+d+e ;
// }

// console.log(Add(1,2,3,4,5)); 

let result=0;
function Add(...args){
    for (let i=0;i<=args; i++){
        result = result + args[i];
    }
    return result;
}

console.log(Add(10,20,30,40,50,60,50));
