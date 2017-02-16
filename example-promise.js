// function getTempCallback(location, callback){
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Philadelphia', function(err, temp){
//     if(err){
//         console.log("Erro: ", err);
//     } else {
//         console.log("Temp: ", temp)
//     }

// });

// function getTempPromise(location){
//     return new Promise(function(resolve, reject){
//         resolve(79);
//         reject('City Not Found');
//     })
// }

// getTempPromise('Philadelphia').then(function(temp){
//     console.log('Success : ', temp);
// }, function(err){
//     console.log('Error : ', err);
// });


function addPromise(a, b){
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            sum = a + b;
            resolve(sum)
        } else {
            reject('Not a number')
        }
    })
}

addPromise(4, 5).then(function(sum){
    console.log("Success", sum)
}, function(err){
    console.log('Error :', err)
})

addPromise("sir").then(function(sum){
    console.log("Success", sum)
}, function(err){
    console.log('Error :', err)
})