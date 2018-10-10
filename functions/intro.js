
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





function rectwos(num){
  console.log(num)
  num *= 2
  if ( num<256 ){
     rectwos(num)
  }
}
//rectwos(1)


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
