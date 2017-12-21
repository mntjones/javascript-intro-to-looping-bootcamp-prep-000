function forLoop (arr) {
  for (let i=0; i <25; i++) {
    if (i === 1) {
      console.log("I am 1 strange loop.")
    }
    
    else {
      console.log("I am  " + i + " strange loops." )
    }
  }
}

function whileLoop(num) {
  while (num > 0) {
    
    console.log(num)
    if (num === 0) {
      console.log("done")
    }
    
    num--
  }
}

whileLoop(10)