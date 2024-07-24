let magicians1: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Penn Jillette",
  "Teller",
];
function make_great1(magiciansArray: string[]): void {
  for (let i = 0; i < magiciansArray.length; i++) {
    magiciansArray[i] = `the Great ${magiciansArray[i]}`;
  }
}
function show_magicians2(magiciansArray: string[]): void {
  magiciansArray.forEach((magicians1) => {
    console.log(magicians1);
  });
}
make_great1(magicians1);
show_magicians2(magicians1);
