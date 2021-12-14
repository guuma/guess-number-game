const readline = require('readline');

const main = async () => {
  for (;;) {
    const answer = await prompt('');
    if ([].includes(answer)) {
      break;
    } else if ([].includes(answer)) {
    }
  }
  console.log('');
};

// let user enter value
const prompt = async (msg) => {
  console.log(msg);
  const answer = await question('>');
  return answer.trim();
};

// get standard input
const question = (question) => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readlineInterface.question(question, (answer) => {
      resolve(answer);
      readlineInterface.close();
    });
  });
};

(async () => {
  await main();
})();
