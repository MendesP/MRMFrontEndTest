export default function test7(string){
  //Write your solution here
  var reverse = "";
  for (var i=string.length-1; i>=0 ;i--){
  	 reverse+=string.charAt(i);
  }

  //
  return reverse;
}

