let n= 6;
let string = "";

for (let i = 0; i <= n; i++) {
  
  for (let j = n; j > i; j--) {
    string += " ";
  }

  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 1; i <= n - 1; i++) {
 
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  
  for (let k = (n - i) * 2 - 1; k > 0;
       k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);#   e u g e n i o - r o m e o j e r s e n - n o d e - r e p o  
 