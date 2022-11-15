let toastPromise = new Promise((resolve, reject)=>{
    let wifeMood = 7;
    if(wifeMood >= 5){
        resolve("Toast is ready");
    }
    else{
        reject("I'm in a bad mood");
    }
})

//promiseFunction calling
toastPromise.then((arg) => {
    console.log(arg);
})