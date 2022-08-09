//Q1. Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

document.querySelector("button").addEventListener("click", () => {
    let cli = document.querySelector("h1");
    cli.innerText = "Hello World";
  });


//Q2. Write code to get 1st H1 element from a webpage using DOM
  
  document.getElementsByTagName("h1")[0];
  document.querySelectorAll("h1")[0];
  document.querySelector("h1");
  

//Q3. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
  
  setInterval(() => {
    let now = new Date();
    let hour = now.getHours() < 12 ? now.getHours() : 12 - now.getHours();
    let mins = now.getMinutes();
    let sec = now.getSeconds();
    let amPm = now.getHours() < 12 ? "AM" : "PM";
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    let time = document.getElementById("clock");
    time.innerText = `${hour} : ${mins} : ${sec} ${amPm}`;
  }, 1000);
  

//Q4. Create an HTML page having content as "Hello world" and a button named "Replace Text". When user will click on this button page content should be changed to "Welcome to Elevation academy"
  
  document.getElementById("button1").addEventListener("click", () => {
    document.querySelector("h2").innerText = "Welcome To Elevation Academy";
  });


//Q5. Create an HTML page having content as "Hello world" and a button named "Hide Text".When user will click on this button hide the "Hello World" text
  
  document.getElementById("button2").addEventListener("click", () => {
    document.querySelector("h2").innerText = "";
  });

  
//Q6. Given an array of 0's and 1's find out number of 0's
  
  let array = [0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0];
  
  let array2 = array.filter((x) => x == 0);
  console.log(array2.length); //13
  
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      count++;
    }
  }
  console.log(count); //13

  
//Q7. Given an array find out total no. of odd and even nos.
  
  let arr = [22,34,54,55,67,89,90,12,21,33,57,78,65,88,61];
  let arr2 = arr.filter((x) => x % 2 === 0);
  console.log("Count of even number in Array : ", arr2.length); // Count of even number in Array :  7
  console.log("Count of odd number in Array : ", arr.length - arr2.length); // Count of odd number in Array :  8

  
//Q8. Given a string find out number of vowels
  
  let str = "whatawonderfullworld";
  function vowelCount(str) {
    let count = 0;
    let vowel = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < str.length; i++) {
      if (vowel.includes(str[i])) {
        count++;
      }
    }
    console.log(count); //10
  }
  vowelCount(str);

  
//Q9. Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same.


  let obj1 = {
    fName: "akki",
    hobbies: ["HTML", "CSS", "JS"],
  };
  let obj2 = {
    lName: "sharma",
    hobbies: ["HTML", "CSS", "JS"],
  };
  function checkObj(obj1, obj2) {
    let count = 0;
    for (let i = 0; i < obj1.hobbies.length; i++) {
      if (obj1.hobbies.includes(obj2.hobbies[i])) {
        count++;
      } else {
        console.log("Courses are not same");
      }
    }
    if (count == obj1.hobbies.length) {
      console.log("Courses are same"); // Courses are same
    }
  }
  checkObj(obj1, obj2);