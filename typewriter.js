const sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 100;
}

//console.log(char); instead of console.log, we are using another way to call that
//takes the \n (add new paragraph) out of our output
//process.stdout.write(char);
