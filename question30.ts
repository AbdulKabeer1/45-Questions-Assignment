//  Hello Admin: Make a array of five or more usernames, including the name 'admin'.
let userNames = ["admin", "asad", "ali", "umar", "zain"];
for (let i = 0; i < userNames.length; i++) {
  console.log("Hello there,", userNames[i]);
  // If the username is 'admin', print a special greeting,
  // such as Hello admin, would you like to see a status report?
  if (userNames[i] == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  }
  // Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
  else {
    console.log(`Hello ${userNames[i]}, thank you for logging in again`);
  }
}
