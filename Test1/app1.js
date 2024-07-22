// for(let i=1;i<=10;i++)
// {
//     // console.log("2*" + i+ "=" +( 2 * i) );
//     console.log(`2* ${i} = ${ 2 * i}` );
// }
// var a=0;
// {
//      a=10;
// }
// {
//     a=50;
// }
// console.log(a);

// const realEstate = {
//     companyName: "Akhila",
//     value: 1000000,
//     exists: true,

// }
// console.log(realEstate.companyName);

// const names = [
//     {
//        companyName: "Akhila",
//          value: 1000000,
//         exists: true,

//      },
//      {
//         companyName: "yashwanth",
//           value: 1000000,
//          exists: true,

//       },
//       {
//         companyName: "sai",
//           value: 1000000,
//          exists: true,

//       },
//       {
//         companyName: "Rakesh",
//           value: 1000000,
//          exists: true,

//       }
//     ]
//    for ( let i=0; i<names.length-1; i++)

//    {
//     if (names[i].exists == true){

//     console.log(names[i].companyName);
//    }}

//    for ( let i=names.length-1; i>=0; i--)

//    {
//     if (names[i].exists == true){ // ( === is used to check type of the variable and compares the value)

//     console.log(names[i].companyName);
//    }}
// let x = myFunction(2);
// function myFunction(n) {


//  for(let i=1;i<=10;i++)
// {
//     // console.log("2*" + i+ "=" +( 2 * i) );
//     console.log(`${n}* ${i} = ${ n* i}` );
// }
// }

const students = [
    {
        name: "Akhila",
        marks: 100,
    },
    {
        name: "Yashwanth",
        marks: 10,
    },
    {
        name: "sai",
        marks: 1,
    },
    {
        name: "rakesh",
        marks: 0,
    }

]

function myFunction(students) {
    const result = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].marks < 100) {
            result.push(students[i]);

        }

    }
    return result;
}
let x = myFunction(students);
console.log(x);