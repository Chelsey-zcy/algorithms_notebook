function evalRPN(tokens: string[]): number | undefined {
  let stack: number[] = []
  for (const token of tokens) {
      if (!isNaN(Number(token))) {
          stack.push(Number(token))
      } else {
          let b = stack.pop()
          let a = stack.pop()
            switch(token) {
              case "+": stack.push(a! + b!); break;
              case "-": stack.push(a! - b!); break;
              case "/": stack.push(a! / b! > 0 ? Math.floor(a! / b!) : Math.ceil(a! / b!)); break;
              case "*": stack.push(a! * b!); break;
          }
      }
  }
  return stack.pop()
};


const token = ["10","-0","*","17","+","5","+"]
console.log(evalRPN(token))