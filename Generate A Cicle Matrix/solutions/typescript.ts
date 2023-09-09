function generateMatrix(n: number): number[][] {
  let startRow = 0
  let endRow = n -1
  let startColumn = 0
  let endColumn= n- 1
  const matrix:number[][] = Array.from(Array(n),()=> Array(n).fill(0))
  let value = 1
  while(startColumn<=endColumn && startRow<=endRow){
      for(let index = startColumn; index <= endColumn; index++){
      matrix[startRow][index] = value
      value++
  }
  startRow++
  for(let index = startRow;index<= endRow; index++){
      matrix[index][endColumn] = value
      value++
  }
  endColumn--
  for(let index = endColumn; index >= startColumn;index--){
      matrix[endRow][index] = value
      value++
  }
  endRow--
  for(let index = endRow; index>=startRow;index--){
      matrix[index][startColumn] = value
      value++
  }
  startColumn++
  }
  return matrix
};