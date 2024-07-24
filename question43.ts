let magicians2: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Penn Jillette",
  "Teller",
];
function make_great(magiciansArray: string[]): string[] {
  let newArray: string[] = [...magiciansArray];
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = `the Great ${newArray[i]}`;
  }
  return newArray;
}
function show_magicians(magiciansArray: string[]): void {
  magiciansArray.forEach((magicians2) => {
    console.log(magicians2);
  });
}
let modifiedMagicians: string[] = make_great(magicians2.slice()); // Using slice() to create a shallow copy
console.log("Original Magicians:");
show_magicians(magicians2);
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
