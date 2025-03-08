const person = {
  firstName: "John",
  lastName: "Doe",
};

const fullName = function () {
  return this.firstName + " " + this.lastName;
}


const person2 = {
  firstName: "Jane",
  lastName: "Doe",
}

// console.log(person.fullName.call(person2, 'mumbai')); // John Doe

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw Error('Not callable')
  }
  context.fn = this;
  console.log(context)
  return context.fn(...args)
}

console.log(fullName.myCall(person2))