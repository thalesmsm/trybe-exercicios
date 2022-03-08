let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 1; i < numbers.length; i +=1) {
  for (ii = 0; ii < i; ii += 1) {
    if (numbers[i] < numbers[ii]) {
      let position = numbers[i];
      numbers[i] = numbers[ii];
      numbers[ii] = position;
    }
  }
}

console.log(numbers);

console.log('-----');

for (i = 1; i < numbers.length; i +=1) {
  for (ii = 0; ii < i; ii += 1) {
    if (numbers[i] > numbers[ii]) {
      let position = numbers[i];
      numbers[i] = numbers[ii];
      numbers[ii] = position;
    }
  }
}

console.log(numbers);