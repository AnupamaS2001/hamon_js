function frequency(string){
    const obj = {};
    for(let char of string)
        {
            if(obj[char]){
                obj[char]+= 1
            }
            else{
                obj[char]= 1
            }
        }
    console.log(obj)       

    
}

string = "Counting objects: 100% (4/4), done. Delta compression using up to 12 threads Compressing objects: 100% (3/3), done."
frequency(string)