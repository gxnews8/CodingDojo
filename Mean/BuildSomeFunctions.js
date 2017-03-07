// Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
function Run() {
  console.log('I am running!');
}

// Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
function multiplyByTen(parameter) {
  // var result = parameter * 10;
  // console.log(result);
  if (typeof(parameter) == "number") {
    return parameter*10;
  }
}
multiplyByTen(5);

// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
function stringReturnOne() {
  // console.log('I am stringReturnOne');
  return "Coding";
}
function stringReturnTwo() {
  // console.log('I am stringReturnTwo');
  return "Dojo";
}

// Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
function caller(parameter) {
  // if (parameter = stringReturnOne()) {
  //   stringReturnOne();
  // }
  if (typeof(parameter) == "function") {
    parameter();
  }
}
caller(stringReturnOne);
// Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.
function myDoubleConsoleLog(parameter1, parameter2) {
  if (typeof(parameter1) == "function" && typeof(parameter2) == "function") {
    console.log(parameter1(), parameter2());
  }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);
// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.
function caller2(parameter) {
  console.log('starting');
  var x =setTimeout(
    function(){
      if (typeof(parameter) == "function") {
        parameter(stringReturnOne, stringReturnTwo);
      }
    }, 12000
  );
  console.log('ending');
  return "interesting";
}
caller2(myDoubleConsoleLog);
