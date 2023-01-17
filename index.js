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
//Question 1: reduce

function averageAge (arrOfObj){
    let sum = arrOfObj.reduce((acc, obj)=> acc + obj.age, 0);
    return Math.round(sum/arrOfObj.length);
    
    // return arrOfObj.age.reduce((acc, cur)=> (acc + cur)/ arrOfObj.length)
}
console.log(averageAge(alumni))

//Question 2:sort 
function orderAlumni (arrOfObj ){
    //descending order
    return arrOfObj.sort((a,b) => b.age-a.age)
    
}
console.log(orderAlumni(alumni))

//Question 3: every
function allUseJavaScript (arrOfObj){
    return arrOfObj.every(el => el.language === "Javascript")
}
console.log(allUseJavaScript(alumni));