console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []; // global array

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

 


