let a={
    a1:"下層"
}
let b={
    __proto__:a,
    b1:"中層"
}
let c={
    __proto__:b,
    c1:"上層"
}
console.log(c)
console.log(c.a1)
