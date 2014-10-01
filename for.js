friends = ["Peter","sam","lauren","myk"];

for (var i = 0; i < friends.length; i++) {
  if(i===0){
    console.log("Hello, "+friends[i]+"!");
  } else {
    console.log(friends[i-1]+" says hello, "+friends[i]+"!");
  }
}

