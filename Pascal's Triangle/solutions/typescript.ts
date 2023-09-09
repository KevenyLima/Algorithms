function generate(numRows: number): number[][] {
  const triangle: number[][] = []
  for(let i = 0; i < numRows; i++){
      triangle.push([])
      for(let j = 0 ; j < (i+1); j++){
          if(j===0||j===i){
              triangle[i].push(1)
              continue 
          } 
          const sum = triangle[i-1][j-1] + triangle[i-1][j]
          triangle[i].push(sum)
      }
  }
  return triangle
};