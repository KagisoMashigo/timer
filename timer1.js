const termArg = process.argv.slice(2);

for (let dur of termArg) {
  if (dur >= 0) {
    setTimeout(() => {
      process.stdout.write('\u0007');
    }, dur * 1000);
  }
}
