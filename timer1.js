//const beep = process.stdout.write('\u0007'); // this line executes regardless...why?

const termArg = process.argv.slice(2)
// const input = termArg.slice(2); //[1, 2]

// const alarm = function(arg) {
  for (let dur of termArg) { //dur = 1 //arg in only needed to loop through the array
    // console.log(dur >= 0);
    if (dur >= 0) { // 1 >= 0 true
      setTimeout(() => {process.stdout.write('\u0007')}, dur * 1000) // timer = dur //setTime(callback, delay in milliseconds)
    }
  }
// }

// alarm(termArg);