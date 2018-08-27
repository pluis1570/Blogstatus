function isSorted(input) {
    // loop over elk element dat een "volgende" heeft
    for (var i = 0; i < input.length - 1; i = i + 1) {
      var element = input[i]
      var volgende = input[i + 1]
      console.log(i, element, volgende)
   
      if (element > volgende) {
        return false
      }
    }
   
    // anders wel
    return true
   }
   
   console.log(isSorted([0, 0, 5, 6]))
   console.log(isSorted([5, 2, 5, 6]))
   console.log(isSorted([5]))
   console.log(isSorted([]))