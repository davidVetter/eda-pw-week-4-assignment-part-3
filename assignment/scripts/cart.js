console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []; // global array
let testArray = [ 3, 4, 5, 6, 7 ]; // test array for empty function
let testString = [ 'David', 'Wanda', 'Heinrich' ]; // test array for empty function

// Function that accepts string as argument, adds that string to basket array
// and returns "true" after adding
function addItem( item ) {
    let newItem = item; // create variable for argument
    basket.push( newItem ); // add new item to the array Basket
    return true; // return true after item is added
} // end addItem function

console.log( `Basket is ${basket}` ); // console logs to show working function
console.log( 'Adding apples (should show true) ', addItem( 'apples' ));
console.log( `Basket is now ${basket}` );
console.log( 'Adding bananas (should show true) ', addItem( 'bananas' ));
console.log( `Basket is now ${basket.join(', ')}` );

// Function that reads the array basket and prints each item on a new console line, numbers items and gives message if nothing to list
function listItems( array ) { 
    let arr = array; // variable to store argument
    let counter = 0; // setting counter to 0     ** I'm digging the for of loops so I opted to use one here **
    for ( value of arr ) { // start for of loop  ** I can see an argument for using a reg for loop since it **
        counter += 1; // add 1 to counter        ** has a built in counter though **
        console.log(`Item #${counter} is ${value}`); // log number item is in list and item
    }
    if (arr.length === 0) { // if statement to check if array is empty
        console.log('No items to list :('); // log message to acknowledge there is nothing to list
    }
    return; // end function
 } // end listItems function

 // Calls to function to test - one from global array by name, hard coded array passed as argument, array of numbers and an empty array
 listItems( basket );
 listItems( ['Dog', 'Cat', 'Fish', 'Rabbit'] );
 listItems( [ 3, 5, 7, 8, 9 ]);
 listItems( [] );

 // Function that clears an array
 function empty( array ) {
    if ( array.length < 1 ) { // checks if array is already empty, if it is gives message and exits function
        console.log("It's tough to clear what is already empty! Please try again...");
        return array;
    } else { // If array is not empty then we empty it, logging a message first of what we cleared
    console.log(`I'm about to clear the array of ${array.join(', ')}`);
    array.length = 0; // clearing array by setting it's length to 0
    return array; // return the emptied array
    } // end if/else
 } // end empty function

 // calls and logs to test function with variables changed first by other functions, unchanged arrays of strings and number
 console.log('Ran function on basket', empty(basket));
 console.log('Basket is now ', basket);
 console.log('The array testArray is ', testArray);
 console.log('Ran function on testArray', empty(testArray));
 console.log('testArray is now ', testArray);
 console.log('The array testString is ', testString);
 console.log('Ran function on testString', empty(testString));
 console.log('testString is now ', testString);
 console.log('This should display empty ', empty([ 3, 4, 5, 6] )); // emptied hard coded array
 console.log('This should display empty ', empty([])); // passing empty array
 console.log(`Double checking that basket is actually empty, ${basket}, nothing should be between the commas`);


