const sentence = "Hello there from sunny Calgary";
let timer = 0

for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char);
  }, timer);
  timer += 50;
}
setTimeout(() => {
  process.stdout.write("\n")
}, timer)