
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
