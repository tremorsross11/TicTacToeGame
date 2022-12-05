function myFunction() {
    var H = "This is ";
    H += "my function ";
    document.getElementById("myfunction").innerHTML = H;
}
var X;
X = () => "This is my function";
document.getElementById("function").innerHTML = X;

const numbers = [8, 3, 12, 16, 2];
let someOver18 = numbers.some(myFunction);

document.getElementById("demo").innerHTML = "Some over 18 is " + someOver18;

function myFunction(value, index, array) {
  return value > 18;
}