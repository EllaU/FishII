function getPrice(){
  var x = document.getElementById("quantity").value;
  var y = document.getElementById("price");
  var z = document.getElementById("selectFish").value;

  if(z == "titus"){
    y.value = x * 1450;
  }
  if(z=="kote"){
    y.value = x * 1200;
  }
  if(z=="catfish"){
    y.value= x* 1500;
  }
}
