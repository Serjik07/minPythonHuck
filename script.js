// const userA = +prompt("a");
// const userB = +prompt("b");
// const userC = +prompt("c");

// function discriminant(a, b, c) {
//     let discriminanto = b ** 2 - 4 * (a * c);
//     if (discriminanto < 0) {
//         alert("imast chuni");
//     } else {
//         let x1 = (-b + Math.pow(discriminanto, 0.5)) / 2;
//         let x2 = (-b - Math.pow(discriminanto, 0.5)) / 2;
//         alert("x1 = " + x1);
//         alert("x2 = " + x2);
//     }
// }
// discriminant(userA, userB, userC);

// let people = [
//     {
//         name : "Mike",
//         age : 3,
//         lastName : "Mikaelyan"
//     },
//     {
//         name : "Valod",
//         age : 2,
//         lastName : "Jordan"
//     },
//     {
//         name : "Jane",
//         age : 992,
//         lastName : "Mamikonyan"
//     }
// ];

// let names = [];

// people.filter((val) => {
//     if (val.age >= 18) {
//         names.push(val.name);
//     }
// })
// alert(names);


// const obj = {
//     name: "Joe",
//     func: () => {
//         alert(this);
//     }
// }
// func.apply();

// function a(arr){
//     return arr.filter(function(val){
//         return val.gender === "female";
//     }).map(function (val) {
//         return{
//             firstname: val.fn,
//             firstname: val.fn,
//             phone: val.ph,
//             gender: val.gender,
//         };
//     });
// }
// alert(JSON.stringify(a(
//     [
//        {fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
//        {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
//        {fn: "Jane", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
//        {fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
//     ])), undefined, 2);

// function a(arr,search) {
//     let filteredArr = arr.filter(function(obj) {
//         return obj.hairColor === search;
//     });
//     let ages = filteredArr.reduce(function(aggr,obj) {
//         return aggr + obj.age;
//     },0)
//     return ages / filteredArr.length
// }
// console.log(a([
//     {name: "Joe", age: 13, hairColor: "red"}, 
//     {name: "Mike", age: 10, hairColor: "brown"}, 
//     {name: "Jane", age: 4, hairColor: "red"}, 
//     {name: "Susan", age: 30, hairColor: "brown"}
// ], "brown"));


// function removeAtIndex(arr,i) {
//     return arr.filter((val,index) => {
//         return index !== i;
//     })
// }
// alert(removeAtIndex([2,1,2],1));





// const c = {
//     saxTxerqinPragon() {
//         alert(this.name + "n el gox chi");
//     }
// }

// const a = Object.create(c);
// a.name = "Sle";
// a.age = 155;

// a.saxTxerqinPragon();
// let g = {};
// console.log(g);





// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// class Game{
//     constructor(x,y,height,width) {
//         let xDelta = 0;
//         let yDelta = 0;

//         this.update = () => {
//             if ((xDelta < 0 && x < 0) || (xDelta > 0 && x + width > canvas.width) || (yDelta < 0 && y < 0) || (yDelta > 0 && y + height > canvas.height)) {
//                 this.stop();
//             } else {
//                 x += xDelta;
//                 y += yDelta;
//             }
//         };
//         this.render = () => {
//             context.fillRect(x, y, width, height);
//         };
//         this.goRight = () => {
//             if(xDelta > 0 && x + width >= canvas.width) {
//                 this.stop();
//             } else {
//                 xDelta = 3;
//             }
//         };
//         this.goLeft = () => {
//             xDelta = -3;
//         };
//         this.goUp = () => {
//             yDelta = -3;
//         };
//         this.goDown = () => {
//             yDelta = 3;
//         };
//         this.stop = () => {
//             yDelta = 0;
//             xDelta = 0;
//         }
//     }
// }

// let data = {
//     hero: new Game(10,10,40,40),
// };



// function render() {
//     context.clearRect(0,0,canvas.width,canvas.height);
//     data.hero.render();
// }
// function loop() {
//     requestAnimationFrame(loop);
//     data.hero.update();
//     render();
// };
// loop();

// document.addEventListener("keydown",(evt) => {
//     if (evt.code === "ArrowRight") {
//         data.hero.goRight();
//     } else if (evt.code === "ArrowLeft") {
//         data.hero.goLeft();
//     } else if (evt.code === "ArrowUp") {
//         data.hero.goUp();
//     } else if (evt.code === "ArrowDown") {
//         data.hero.goDown();
//     }
// })

// document.addEventListener("keyup",(evt) => {
//     data.hero.stop();
// })





// class Arraya {
//     constructor(...aggr) {
//         this.i = aggr;
//     }
//     static isArraya(val) {
//         return( val.__proto__ !== Object.prototype && typeof val !== "string" && 
//         typeof val !== typeof NaN && val !== undefined && val !== null)
//     }
// }



// let a = new Arraya(1,2,3)
// console.log(a); 
// console.log(Arraya.isArraya(["a,v"]));






// class Ara {
//     constructor(name, age, salary) {
//         if (typeof name == "string") {
//             this.name = name;
//         } else console.error("The name must be string");
//         if (!isNaN(age) && age > 0) {
//             this.age = age;
//         } else console.error("The age must be a number");
//         if (typeof salary == "number" && salary > 0) {
//             this.salary = salary;
//         } else console.error("The salary must be number");
//     }
// }
// alert(isNaN("a"));
// let a = new Ara("Vlod", 10, "11");


// Array.prototype.toString = () => {
//     return "[array,Array]";
// };

// let a = [1,2,3];
// alert(a);


// const btn = document.querySelector("#alert_button");

// btn.addEventListener("click",forButton);
// let id;
// function forButton() {
//     id !== undefined ? clearTimeout(id): 0;
//     id = setTimeout(() => {
//         alert("yay");
//     },1000)
// }






// let btn = document.querySelector(".addButton")


// function add() {
//     objsArr.push(new myObj(prompt("name"),prompt("paragraph"),prompt("imgUrl")));
//     update();
// }

// let objsArr = [
//     card = {
//         name: "EEEEEEE",
//         paragraph: "lorme impus dolor sit",
//         imgUrl: "https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg",  
//     }
// ]

// class myObj {
//     constructor(name,paragraph,imgUrl) {
//         this.name = name;
//         this.paragraph = paragraph;
//         this.imgUrl = imgUrl;
//     }
// }



// let body = document.querySelector(".body")
// function update() {
//     console.log(objsArr)
//     body.innerHTML = "";
//     return objsArr.map(function (obj) {
//         body.innerHTML +=
//             `<div class="main-div">
//             <div class="picture"><img src="${obj.imgUrl}"></div>
//             <div class="card-name">
//                 <h1>${obj.name}</h1>
//                 <p class="p">${obj.paragraph}</p>
//             </div>
//         </div>`
        
//     })    
// }
// update();



function a(arr) {
    let new_list = [];
    arr.forEach(val => {
        val.forEach(v => {
            new_list.push(v);
        })
    });
    arr = new_list;
    new_list = [];
    while (arr.length) {
        let minimum = Math.min(...arr);
        new_list.push(minimum)
        let indexMin = arr.indexOf(minimum)
        arr.splice(indexMin,1)
    }
    return new_list;
}
console.log(a([[1,4,5],[1,3,4],[2,6]]))