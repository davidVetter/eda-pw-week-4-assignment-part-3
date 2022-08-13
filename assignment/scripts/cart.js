console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []; // global array
let testArray = [ 3, 4, 5, 6, 7 ]; // test array for empty function
let testString = [ 'David', 'Wanda', 'Heinrich' ]; // test array for empty function
const maxItems = 5; // global constant for stretch #1

// Function that accepts string as argument 1 and an array as argument 2, adds that string to the array if the max amount
// allowed in the array is not reached. Returns false and does not add value if at max or greater or returns "true" after adding the value
function addItem( item, array ) {
    let newItem = item; // create variable for 1st argument
    let arr = array; // create variable for 2nd argument
    if (isFull(arr)) { // checks if array is less than the max allowed
        console.log('The list is already full! Your item was not added.'); // message if item wasn't added
        return false;
    } else {
        arr.push(newItem); // add new item to the array Basket
        return true; // return true after item is added
    } // end if/else
} // end addItem function

function testAdd() {
console.log( `Basket is ${basket}` ); // console logs to show working function
console.log( 'Adding apples (should show true) ', addItem( 'apples', basket ));
console.log( `Basket is now ${basket}` );
console.log( 'Adding bananas (should show true) ', addItem( 'bananas', basket ));
console.log( `Basket is now ${basket.join(', ')}` );
console.log( 'Adding peaches (should show true) ', addItem( 'peaches', basket ));
console.log( `Basket is now ${basket.join(', ')}` );
console.log( 'Adding pinneapple (should show true) ', addItem( 'pineapple', basket ));
console.log( `Basket is now ${basket.join(', ')}` );
console.log( 'Adding grapes (should show true) ', addItem( 'grapes', basket ));
console.log( `Basket is now ${basket.join(', ')}` );
console.log( 'Adding strawberry (should show false) ', addItem( 'strawberry', basket ));
console.log( `Basket is now ${basket.join(', ')}` );
}

// Function that reads the array basket and prints each item on a new console line, numbers items and gives message if nothing to list
function listItems( array ) { 
    let arr = array; // variable to store argument
    let counter = 0; // setting counter to 0     ** I'm digging the for of loops so I opted to use one here **
    for ( let value of arr ) { // start for of loop  ** I can see an argument for using a reg for loop since it **
        counter += 1; // add 1 to counter        ** has a built in counter though **
        console.log(`Item #${counter} is ${value}`); // log number item is in list and item
    }
    if (arr.length === 0) { // if statement to check if array is empty
        console.log('No items to list :('); // log message to acknowledge there is nothing to list
    }
    return; // end function
 } // end listItems function

 function testList() {
 // Calls to function to test - one from global array by name, hard coded array passed as argument, array of numbers and an empty array
 listItems( basket );
 listItems( ['Dog', 'Cat', 'Fish', 'Rabbit'] );
 listItems( [ 3, 5, 7, 8, 9 ]);
 listItems( [] );
 }

 // Function that clears an array
 function empty( array ) {
     if (array.length < 1) { // checks if array is already empty, if it is gives message and exits function
         console.log("It's tough to clear what is already empty! Please try again...");
         return array;
     } else { // If array is not empty then we empty it, logging a message first of what we cleared
         console.log(`I'm about to clear the array of ${array.join(', ')}`);
         array.length = 0; // clearing array by setting it's length to 0
         return array; // return the emptied array
    } // end if/else
 } // end empty function

 function testEmpty() {
 // calls and logs to test function with variables changed first by other functions, unchanged arrays of strings and number
 console.log(`Showing contents of basket before the empty function: ${basket.join(', ')}`);
 empty(basket);
 console.log('Basket is now ', basket);
 console.log('The array testArray is ', testArray);
 empty(testArray);
 console.log('testArray is now ', testArray);
 console.log('The array testString is ', testString);
 empty(testString);
 console.log('testString is now ', testString);
 console.log('This should display empty ', empty([ 3, 4, 5, 6] )); // emptied hard coded array
 console.log('This should display empty ', empty([])); // passing empty array
 console.log(`Double checking that basket is actually empty, ${basket}, nothing should be between the commas`);
 } // end testEmpty function

 // Function to check if basket is full, accepts array as argument
 // **Tests in addItem function**
function isFull ( array ) {
    let arr = array;
    if ( arr.length < maxItems ) {
        return false;
    } else {
        return true;
    }
} // end function

// Function to remove an item from array
function removeItem( item, array ) {
    let rmItem = item; // create variable for first argument
    let arr = array; // create variable for second argument
    if ( arr.indexOf( rmItem ) < 0 ) { // check if requested item exists
        console.log( "Your item couldn't be found, it was not removed" ); // log message if item not found
        return null;
    } else {
        arr.splice( arr.indexOf( rmItem ), 1 ); // remove item at index of first argument
        return rmItem;
    } // end if else 
} // end removeItem function

function testRemove() {
// Adding items to basket for testing and trying to remove an item that doesn't exist
console.log( 'Adding apples (should show true) ', addItem( 'apples', basket ));
console.log( 'Adding bananas (should show true) ', addItem( 'bananas', basket ));
console.log( 'Adding peaches (should show true) ', addItem( 'peaches', basket ));
console.log( `Basket is now ${basket.join(', ')}` );
console.log('Trying to remove apples from basket (should return apples)', removeItem( 'apples', basket ));
console.log(`Basket now contains ${basket.join(', ')}`);
console.log('Trying to remove apples from basket (should return null)', removeItem( 'apples', basket ));
console.log(`Basket now contains ${basket.join(', ')}`);
}

function questBtn () {
    if ( document.getElementById('list').style.display === 'none' ) {
    document.getElementById('list').style.display = 'block';
    document.getElementById('questionBtn').style.backgroundColor = '#52ffb8';
    document.getElementById('questionBtn').style.color = '#615756';
    document.getElementById('questionBtn').innerText = 'I am done!'
    } else {
        document.getElementById('list').style.display = 'none';
        document.getElementById('questionBtn').innerText = 'Questions?';
        document.getElementById('questionBtn').style.backgroundColor = '#615756';
        document.getElementById('questionBtn').style.color = '#52ffb8';
    }
}
