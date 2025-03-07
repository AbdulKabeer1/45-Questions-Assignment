// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username
// Make a list of five or more usernames called current_users
let current_users = ["asad", "ali", "usman", "jawad", "bashir"];
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list
let new_users = ["umer", "Ali", "abbass", "jawad", "danish"];
// Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
for (let user of new_users) {
  if (current_users.includes(user)) {
    console.log("You need to enter a new username");
  } else {
    console.log("The username is available");
  }
}
