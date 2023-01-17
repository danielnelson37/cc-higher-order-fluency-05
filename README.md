# Code Challenge: High-Order Array Methods

## Instructions

1. Clone down this assignment to AWS Cloud9. 
2. Code your solution using JavaScript in `index.js`. 
3. **Be sure to run and test your code throughly!**
4. By the end of Code Challenge, **commit and push your changes up to Github**.
5. Using the browser, verify that your solution is in your remote repo on Github.

## Problems 
    
### **Test all your solutions for the questions 1-4 with the following variable:** 

```jsx
const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}]
```

1. Write a function named `averageAge` that takes an array of objects and returns the average of all the ages from each age property in each object rounded to the nearest whole number. 
    
    ```jsx
    averageAge(alumni) // 22
    ```

2. Write a function named `orderedAlumni` that takes an array of objects and sorts the objects by the age of the alumni from oldest to youngest. 
    
    ```jsx
    orderedAlumni(alumni) // returns [
      { name: 'Devonte', job: 'WW', language: 'JavaScript', age: 23 },
      {
        name: 'Shemar',
        job: 'SquareSpace',
        language: 'JavaScript',
        age: 23
      },
      { name: 'Jarrit', job: 'TPT', language: 'JavaScript', age: 22 },
      {
        name: 'Stephanie',
        job: 'JPMorgan',
        language: 'JavaScript',
        age: 21
      },
      { name: 'Enmanuel', job: 'Asana', language: 'JavaScript', age: 21 },
      { name: 'Cielo', job: 'NYT', language: 'JavaScript', age: 21 }
    ]
    ```

3. Write a function named `allUseJavaScript` that takes an array of objects and returns a boolean if for every object, the language property is 'JavaScript'.
    
        ```jsx
        allUseJavaScript(alumni) // returns true
        ```


