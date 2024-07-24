let personName1 = "Abdul Kabeer";
console.log(personName1.toLocaleLowerCase());
console.log(personName1.toLocaleUpperCase());
console.log(personName1.replace(/\b\w/g, (char: string) => char.toUpperCase()));
