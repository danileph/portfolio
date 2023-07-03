export function findNearestNumbersToZero(numbers: number[]): [number, number] {
  let leftIndex = -1;
  let rightIndex = -1;

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num < 0 && (leftIndex === -1 || num > numbers[leftIndex])) {
      leftIndex = i;
    } else if (num > 0 && (rightIndex === -1 || num < numbers[rightIndex])) {
      rightIndex = i;
    }
  }

  return [leftIndex, rightIndex];
}