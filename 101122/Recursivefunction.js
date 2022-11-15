function getRecursive(nr){
    console.log(nr);
    if(nr<10){
        getRecursive(++nr);
    }
}
getRecursive(1);