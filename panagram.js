
var s ="the quick brown fox jumps over the lazy dog"
s = s.toLowerCase()
var a = ' abcdefghijklmnopqrstuvwxyz'

const result = ()=>{

    for(let char of a){
        if (!s.includes(char)){
            return false
        }
        
        
        
    }
}

    
console.log(result() == false ? "not pangram":"pangram")

