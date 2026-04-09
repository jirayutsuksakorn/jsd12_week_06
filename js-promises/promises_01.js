// In JS, a Promise is an object representing
// the eventual completion (or failure) of an
// asynchronous operation and its resulting value.
// new Promise(() => { });

const myPromise = new Promise((resolve, reject) => {
    const status = false;

    if (status) {
        resolve('Operation ran succesfully!');
    } else {
        reject('Sometimg went wrong!');
    }

});

myPromise
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error();
    })
    .finally(() => {
        console.log('Process finish');
    })