// declare a data structure
// the user will enter text into a box on the screen
// when the user clicks a button that says "submit", a main function will fire
// the main function will populate the data structure with the user's input
// if the submitted string contains certain phrases, or commands, the page will be appended with different buttons and images
// the user will be tasked with solving a simple mystery through submitting the appropriate inputs

// site data structure
const HIST = {
  user_input : '',
  unlock_codes : [
    "open sesame",
    "please",
    "switchboard",
    "chillin"
  ],
  error_messages: {
  wrong_unlock_code : "error: incorrect value"
  }
};

function main () {
  // get user input and store it in HIST
  HIST.user_input = document.getElementById("inputString").value;
  // tell the user what just happened
  console.log(HIST.user_input);
  console.log(HIST);
  /* pass in the newly grabbed user input into the 
     inputChecker function after converting
     to lower case to see if there's a match */
  inputChecker(HIST.user_input.toLowerCase());
}

const inputChecker = function (input) {
  /* - check to see if the input that was just submitted
       unlocks anything
     - update the page to reflect (done in switchboard) */
  console.log("Checking user input...")
  if (input) {
    for (let i=0; i<HIST.unlock_codes.length; i++) {
      if (input === HIST.unlock_codes[i]) {
        console.log("Match found at index: " + i);
        switchboard(HIST.unlock_codes[i]);
      }
    }
  }
};

const switchboard = function (unlock_code) {
  // compare the specific unlock code to a list of unlock functions
  // each case should launch a different function
  // each function should change something on the main page when fired
  console.log("Switchboard launch...")
  switch(unlock_code) {
    case "chillin":
      chillin();
      break;
    case "open sesame":
      openSesame();
      break;
    case "please":
      please();
      break;
    case "switchboard":
      switchboard();
    default:
      console.log("not so fast partner, you gotta pass something in as an argument")
  };
  console.log("Switchboard complete.")
}

function openSesame () {
  console.log('"open sesame" unlocked')
  document.getElementById("openSesameDiv").innerHTML = "You found me!"
}

function please () {
  console.log('"please" unlocked')
  document.getElementById("pleaseDiv").innerHTML = "You found me too! Wow"
} 

function chillin () {
  console.log('"chillin" unlocked')
  document.getElementById("chillinDiv").innerHTML = "Dude...me too brah..."
}

console.log(HIST.user_input)