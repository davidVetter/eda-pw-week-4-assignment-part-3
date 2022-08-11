console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []; // global array

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