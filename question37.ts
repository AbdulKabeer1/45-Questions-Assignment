function make_shirt1(
  message: string = "I love Coding",
  size: string = "Large"
): void {
  console.log(
    `You have ordered a ${size} T-shirt with the message: "${message}".`
  );
}
make_shirt1();
make_shirt1(undefined, "Medium");
make_shirt1("TypeScript is awesome!", "Small");
