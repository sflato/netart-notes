
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
  if(string[0]=="N") return true
  else return false
})
 console.log( docs )
