let money = 1000
const buyCar = (car) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (money>1000){
                resolve('can buy ' + car)
            }else {
                reject('do not enough money')
            }
        },100)
    })
}
money=1000000
buyCar('vinfast')
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})