function firstDuplicate(a) {
  var lowestIndex = ""
  
  for(var i = 0; i < a.length; i++) {
      console.log("NEW LOOP i:",a[i]);
      //console.log("check j:",a[j])
      for(var j = i+1; j < a.length; j++) {
          // console.log(a[j]);
          if(a[j] === a[i]){
              currentLowestIndex = a.indexOf(a[j],i+1);
              console.log(currentLowestIndex);
              if(currentLowestIndex < lowestIndex || lowestIndex === "") {
                  lowestIndex = currentLowestIndex;
              }
              console.log(lowestIndex);
          }
      }
  }
  if(lowestIndex != "") {
      return a[lowestIndex];    
  }
  else {
      return -1;
  }
}
