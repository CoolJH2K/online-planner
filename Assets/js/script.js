// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?

  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
  var time = dayjs().format('hh:mm:ss');
  $('.time-block').text(time);
  if ('.time-block' === time) {
    
  }

  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id attribute of each time-block be used to do this?
  
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
});


// Read the docs!!! Some useful methods to look into ---> .parent(), .attr(), .siblings(), .each(), .addClass(), .removeClass(), and of course, .val()
// You CAN NOT use ES6 arrow functions as arguments in jQuery methods and have "this" work correctly ---> not () = {} Instead, you must use ---> funciton () {}
// Look into vanilla JavaScript method .split()
// An exampe of .split() would be --->
// let string = "Journey_to-space";
// let splitString = string.split("_");
// The log of splitString would be:
// ["Journey", "to-space"];
// let splitString2 = string.split("-");
// Log of splitString2 would be:
// ["Journey-to", "Space"];
// How can you use this?
// Try playing around with chaining!
// The two main functions to write (aside from the event listener) will need to be invoked