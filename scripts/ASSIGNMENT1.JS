// --------------------------------TASK 01----------------------------;

// var zakatPercent = 0.025
// var userInput =+ prompt("Please Enter Your Amount On Which Zakat Is To Be Applied : ")
// var result = zakatPercent * userInput
// alert("Your Total Amount Of Zakat Will Be : "+ result)

// ---------------------------------TASK 02----------------------------;

// var familyMembers = + prompt("How Many Members Are There In Your Family?")
// var methods = + prompt(" Please Choose a Fitrah Method: \n 1) Wheat (2 KG for 250 Rs) \n 2) Barley (3.5 KG for 450 Rs) \n 3) Dates (3.5 KG for 2100 Rs) \n 4) Raisins (3.5 KG for 2800 Rs) ")
// var firstMethod = familyMembers * 250
// var secondMethod = familyMembers * 450
// var thirdMethod = familyMembers * 2100
// var fourthMethod = familyMembers * 2800


// if (methods == 1) {
//     alert('Your Total Fitrah amount is: ' + firstMethod)
// }


// else if (methods == 2) {
//     alert('Your Total Fitrah amount is: ' + secondMethod)
// }



// else if (methods == 3) {
//     alert('Your Total Fitrah amount is: ' + thirdMethod)
// }


// else if (methods == 4) {
//     alert('Your Total Fitrah amount is: ' + fourthMethod)
// }


// else {
//     alert('Kindly Select Appropriate Method: ')

// }

// ------------------------------TASK 03---------------------------------;

// var secretNumber = 9
// var userInput = + prompt("Please Guess a Number: ")

//  if (userInput == 9) {
//      alert("Congratulations! You guessed the secret number")
//  }
//  else if(userInput<=5){
//      alert("Your guess is too low")
//  }
//  else if(userInput>=15){
//      alert("Your guess is too high")
//  }

//   else {
//      alert("Try Again")
//  }

// ----------------------------TASK 04------------------------------;

// var userInput = prompt("Enter Your Name: ");
// updated = userInput.charAt(0).toUpperCase() + userInput.slice(1);
//  alert(("Your name with the first letter capitalized: " + updated))

// ---------------------------TASK 05-----------------------;

// var contactNumbers = [ ]
// var contactNames = [ ]
// var phone =+ prompt("Enter Your Number: ")
// var recipient = prompt("Enter Your Name: ")
// contactNumbers.push(phone)
// contactNames.push(recipient)


// for (var i = 0; i < contactNumbers.length; i++) {
//   console.log((contactNumbers))
//   for (var i = 0; i < contactNames.length; i++) {
//     console.log((contactNames))
//   }
// }
// alert("Here is your entered Recored: " + contactNames + (" ") + contactNumbers)

// ------------------------TASK 06-------------------------;

// var products = ["Mango", "Apple", "Banana", "Orange", "Grapes", "Pineapple", "Watermelon", "Peach"]; 
// var userInput = (prompt('Enter the position of the item you want to remove (0 - 7}): ')); 
// var removeItem = products.splice(userInput, 1 ); 
// console.log('The removed item is: '+ removeItem);
// alert('The removed item is: ' + removeItem); 
// console.log('The remaining items in the array are: ' + products);
// alert('The remaining items in the array are: ' + products); 
// console.log('Total number of items remaining: ' + products.length);
// alert('Total number of items remaining: ' + products.length);


// -----------------------TASK 07-------------------------------;

// var nation = prompt("Enter your Nationality: ")
// var updateNation = nation.toLowerCase
// var gender = prompt("Enter Your Gender: ")
// var updateGender = gender.toLowerCase
// var age = + prompt("Enter Your Age: ")
// var updateAge = age.toLowerCase

// if ((updateNation == "pakistani") || (updateNation == "indian")) {
//    if (gender == "male" && age >= 18) {
//         console.log('You are eligible to vote')
//     }
//         else if (gender== "female" && age>=18) {
//             var marriage = (prompt("Are you married?"))
//             var updateMarriage = marriage.toLowerCase
//             if (marriage== "yes") {
//                console.log('You Are Eligible to vote')
//             } else {
//                 console.log('You are not eligble')
//             }

//     } else {
//        console.log('You are not Eligible to vote')
//     }

// } else {
//         console.log("You are not eligible to vote")

//     }


// -------------------------------------TASK 08------------------------------;

var worldCupSquad = ['Imad', 'Hafeez', 'Usman', 'Azam', 'Shahid', 'Babar', 'Sharjeel', 'Aamer', 'Shadab', 'Hasnain', 'Hasan', 'Fakhar', 'Rizwan', 'Umer', 'Wasim']
var finalTeam = worldCupSquad.slice(3, 16)
alert(finalTeam)
