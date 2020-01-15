var fruits=[{
    price: 6,
    name: 'apple'
},{
    price: 9,
    name: 'Mango'

},{
    price: 4,
    name: 'Guava'
},{
    price: 7,
    name: 'Cherry'
}]

fruits.sort(function(check1, check2){
    if(check1.price > check2.price){ // try changing value price to name and > to < also
        return -1;
    }else {
        return 1
    }
})
document.write(fruits)
console.log(fruits)