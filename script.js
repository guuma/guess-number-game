const util = require('util');
const readline = require('readline');
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const print = function (message) {
  process.stdout.write(util.format.apply(this, arguments));
};

const answer = Math.floor(Math.random() * 100) + 1;
let turn = 0;

print('数当てゲーム★\n');
print('1 ~ 100の間の数字を入力してください');

readlineInterface.on('line', (line) => {
  ++turn;

  let inputNumber = +line;
  if (global.isNaN(inputNumber)) {
    print('不正な値です\n');
  } else if (inputNumber < answer) {
    print('もっと大きい！\n');
  } else if (inputNumber > answer) {
    print('もっと小さい\n');
  } else {
    print('正解!!\n');
    readlineInterface.close();
    return;
  }
  print('1 ~ 100の間の数字を入力してください');
});
readlineInterface.on('close', () => {
  print('答えは %d, 正解までに %d ターンかかりました. \n', answer, turn);
});
