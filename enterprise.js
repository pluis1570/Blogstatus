workers = [
    { name: "paul", alive: true, salary: 5000 },
    { name: "rob", alive: false, salary: 3000 },
    { name: "steve", alive: false, salary: 5000 },
    { name: "tom", alive: true, salary: 2000 },
    { name: "bert", alive: true, salary: 10000 },
   ]
 
   function sendCards(workers){
       console.log("send a card to every dead workers family")
 
       for (var i = 0; i < workers.length; i++) {
           var worker = workers[i];
           console.log("i",i,"worker",worker)
 
           if(worker.alive == false){
               console.log("sending card to the family of",worker.name)
           }
       }
   }
 
   // totale loonkost per maand
   function loonkost(workers){
       var total = 0
    for (var i = 0; i < workers.length; i++) {
        var worker = workers[i];
        if(worker.alive){
            total = total + worker.salary
      }
    }
    return total
 }
 
 //gemiddelde loon van alle overleden werknemers
 function gemiddelde(workers){
    var total = 0
    var aantalDoden = 0
    for (var i = 0; i < workers.length; i++) {
        var worker = workers[i];
        if(worker.alive == false){
            total = total + worker.salary
            aantalDoden = aantalDoden+1
      }
    }
    if (aantalDoden == 0) {
        return 0    }
 
 return total/aantalDoden
 }
 
 sendCards(workers)
 console.log(loonkost(workers))
 console.log("gemiddelde:",gemiddelde(workers))