export default function meanOfArray(arr) {
  let sum = 0;
  for (let ele of arr) {
    sum += ele;
  }
  return sum / arr.length;
}

console.log(meanOfArray([1, 2, 3, 4, 5])); 