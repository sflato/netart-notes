<h1> functions <h1>

```javascript
//Three ways to write a function
function powers2 (){
  let num = 1
  for (var i = 0; i < 8; i++) {
    console.log(num)
    num *= 2
  }
}

let powers2 = function() {
  //code goes here
}

let powers2 = ()=>{
  //code goes here
  //this is an arrow function
  //handles scope differently
}

```

<h2> scope <h2>
``` javascript
function squareA(){
  let a = 5
  a *= a
}
//this variable is in this functions scope
let a = 5
function squareA(){
  a *= a
}
//this variable is now in the global scope
```
<h2> pure functions <h2>

```javascript
function square( b ){
  b *= b
  return b
}

//separate functions

function add ( a, b ){
  let answer = a + b
  return answer
}

squareA()

let x = square(5)
let y = add( 10, 20)

//*******************************
function add ( a, b ){
  let answer = a + b
  console.log(answer)
  return answer
}
//^^^^^^^ this is not a pure function
```
```javascript
anything.likethis
/// first word is an object
anything.likethis()
//method
```

```javascript
function powers2(amount){
  let num = 1
  let arr = []
  for (var i = 0; i < amount; i++) {
    arr.push(num)
    num *= 2
  }
  return arr
}

let twos = powers2(100)

console.log (twos[3])
//this is also a pure function that only prints the 3rd number in the array
function powers2(amount){
  let num = 1
  let arr = []
  for (var i = 0; i < amount; i++) {
    arr.push(num)
    num *= 2
  }
  return arr
}

let twos = powers2(100)

console.log (twos[twos.length-1])
// this is to get the last value in an array
```
<h2> recursive functions<h2>
```javascript
function inception(){
  inception()
}
inception()
//*****************
let name = "stef"
name = name.indexOf('e')
//this will tell me the position of the letter e in the string
let name = "stef"
name = name.replace('e','o')
//this will replace the letter e with o
```
``` javascript

function replaceAll( string, char, rep ){
    if (string.indexOf(char) < 0 ){
      return string
    } else {
        string = string.replace( char, rep )
        //return replaceAll( string, char, rep)
         "nock briz"
        if (string.indexOf(char) >= 0) {
          return replaceAll( string, char, rep)
        } else {
          return string
        }
    }
}

let newName = replaceAll("nick briz", "i", "o")
console.log( newName )
// this replaces all of the i's with o's
```
<h2> higher order function<h2>
```javascript
function repeat ( num, func){
  for (let i =0; i < num; i++){
    func(i)
   }
}
//^^^^^^^^^^^^^^this is the high order function
function sayHi( num ){
  console.log(`hello for the ${num} time`)
}

repeat( 5, sayHi )
```

```javascript

function startsWithA(string){
  if (string[0] === "A") return true
    else return false
}

function hasPrefix( string ){
  if(string.indexOf('Mr.') >=0 ||
     string.indexOf('Ms.') >=0 ||
     string.indexOf('Mrs.') >=0 ||
     string.indexOf('Dr.') >=0){
       return true
     } else {
       return false
     }
}

arr = ["Nick","Tina","Anna"]

function filter(arr, func){
  let passed = []
  for (let i = 0; i < arr.length; i++) {
      if( func(arr[i]) ){
          passed.push( arr[i] )
      }
   }
   return passed
}

let faculty = ["Nick","Jon","Dr.Englebart","Dr.Poop"]

let docs = filter(faculty, function(string){
  if(string[0]==="N") return true
  else return false
})
 console.log( docs )
```
