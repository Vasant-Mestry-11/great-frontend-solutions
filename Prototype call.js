const person = {
  firstName: "John",
  lastName: "Doe",
};

const fullName = function (state) {
  return this.firstName + " " + this.lastName + ' ' + state;
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
  return context.fn(...args)
}


Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw Error('Not callable')
  }
  if (!Array.isArray(args)) {
    throw new Error("TypeError: CreateListFromArrayLike called on non-object")
  }
  context.fn = this;
  return context.fn(...args)
}


Function.prototype.myBind = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw Error('Not callable')
  }
  if (!Array.isArray(args)) {
    throw new Error("TypeError: CreateListFromArrayLike called on non-object")
  }
  context.fn = this;
  return function () {
    return context.fn(...args)
  }
}

console.log(fullName.myBind(person2, ["Vasant", "Mestry"])())
