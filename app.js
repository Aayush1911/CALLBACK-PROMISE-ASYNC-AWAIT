let h1 = document.querySelector("h1");

// callbacks
// setTimeout(()=>{
//     h1.style.color='red'
// },1000)

// setTimeout(()=>{
//     h1.style.color='blue'
// },2000)

// setTimeout(()=>{
//     h1.style.color='green'
// },3000)


// function changecolor(color,delay,nextcolorchange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         nextcolorchange();
//     },delay)
// }

// changecolor('red', 1000,()=>{
//     changecolor('blue', 1000,()=>{
//         changecolor('green', 1000,()=>{
//             changecolor('yellow', 1000)
//         });
//     });
// });

//promises
// function changecolor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             resolve("Color Changed")
//         },delay)
//     })
// }

// changecolor('red',1000)
// .then(()=>{
//     console.log("red color completed");
//     return changecolor("blue",1000)
// })
// .then(()=>{
//     console.log("blue color completed");
//     return changecolor("green",1000)
// })
// .then(()=>{
//     console.log("green color completed");
// })


// function savetodb(data, sucess, failure) {
//   let internetspeed = Math.floor(Math.random() * 10 + 1);
//   if (internetspeed > 4) {
//     sucess();
//   } else {
//     failure();
//   }
// }

// savetodb(
//   "AAYUSH",
//   () => {
//     console.log("Success 1 : Data 1 saved");
//     savetodb(
//       "Hello",
//       () => {
//         console.log("Success 2 : Data 2 saved");
//         savetodb(
//           "Hello",
//           () => {
//             console.log("Success 3 : Data 3 saved");
//           },
//           () => {
//             console.log("Failure 3 : Data 3 not saved");
//           }
//         );
//       },
//       () => {
//         console.log("Failure 2 : Data 2 not saved");
//       }
//     );
//   },
//   () => {
//     console.log("Failure 1 : Data 1 not saved");
//   }
// );

// function savetodb(data) {
//     return new Promise((success,failure)=>{
//         let internetspeed = Math.floor(Math.random() * 10 + 1);
//         if(internetspeed>4){
//             success("Success : Data saved");
//         }else{
//             failure("Failure : Data not saved");
//         }
//     })
//   }
// savetodb("Hello").then(()=>{
//     console.log("data 1 is saved");
//     return savetodb('World')
//   })
//   .then(()=>{
//     console.log('data 2 is saved');
//     return savetodb("AAYUSH")
//   })
//   .then(()=>{
//     console.log('data 3 is saved');
//   })
  
//   .catch(()=>{
//     console.log("promise is rejected");
//   })


//async and await

// async function greet(){
//  return "hello"
// }
// greet()
// .then((data)=>{
//     console.log("Promise resolved :",data);
// })
// .catch((err)=>{
//     console.log("Promise rejected :",err);
// })

function getnum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let num=Math.floor(Math.random()*10+1)
        console.log(num);
        resolve()
        return num;
        },1000)
    });
}
async function demo(){
    await getnum()
    await getnum()
     getnum()
}

