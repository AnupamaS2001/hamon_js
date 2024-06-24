var string="Malayalam"
var text=string.toLowerCase()
var len=text.length-1
var reversed=""
for(let i=len;i>=0;i--){
    let char=text[i]
    reversed+=char
}
console.log(reversed==text?"palindrome":"not palindrome");