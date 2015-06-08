 
 var log = function() {
  try {
    console.log.apply(console, arguements);
  }
  catch(e) {
    try {
      opera.postError.apply(opera, arguements);
    }
  catch(e) {
    alert(Array.prototype.join.call(arguements, " "));
   }
  }
 }