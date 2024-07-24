const magicians: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Penn Jillette",
  "Teller",
];
function show_magicians1(magiciansArray: string[]): void {
  magiciansArray.forEach((magician) => {
    console.log(magician);
  });
}
show_magicians1(magicians);
