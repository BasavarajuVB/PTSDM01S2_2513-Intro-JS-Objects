let num = "567"
let reverse = 0 
for(let i = 0; i < num.length; i++){
    reverse = reverse * 10 + (num[i] - 0)
}
console.log(reverse) // 765