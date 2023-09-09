# Pascal's Triangle

Given an integer `numRows`, return the first numRows of **Pascal's triangle**.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

![Pascal's Triangle Animation](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

## Example

### Example 1:

Input:
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

### Example 2:

Input:
numRows = 1

Output: [[1]]

## Constraints

- `1 <= numRows <= 30`

## Intuition

The goal here is to construct a 2D array to represent each row and column in the triangle.

## Approach

I begin by creating a 2D array. Then, I iterate through each cell, determining its value based on the corresponding cells in the previous row. Specifically, I calculate the sum of the values in the current column and the one just before it.

## Complexity

- Time complexity: **O(numRows^2)**
- Space complexity: **O(numRows^2)**
