let action = process.argv[2]
let amount = Number(process.argv [3])
let balance = 1000

if ( isNaN(amount) ){
  console.log(`oh no, you passed ${process.argv [3]} instead of a number`)

} else if( action == 'give'){

    balance += (amount)
     console.log ('thanks bud')
      console.log (`you now have ${balance} dollars` )

} else if (action == 'take') {

    balance -= (amount)
     console.log ('so sad u losing money'+ amount + 'to be exact')
    console.log ('you now have ' +balance+ ' dollars' )

} else{

  console.log('sorry ' + action + ' not gonna work here bud')

}
