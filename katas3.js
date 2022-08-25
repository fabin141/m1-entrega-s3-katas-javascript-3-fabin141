const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let arr = [];
    for(let i = 1; i < 26; i++){
        arr.push(i);
    }
    let array = arr.join(', ')
    return array;
}
console.log(`Kata01: ${kata1()}`);

function kata2() {
    let arr = [];
    for(let i = 25; i > 0; i--){
        arr.push(i);
    }
    let array = arr.join(', ')
    return array;
}
console.log(`Kata02: ${kata2()}`);

function kata3() {
    let arr = [];
    for(let i = -1; i > -26; i--){
        arr.push(i);
    }
    let array = arr.join(', ')
    return array;
}
console.log(`Kata03: ${kata3()}`);

function kata4() {
    let arr = [];
    for(let i = -25; i < 0; i++){
        arr.push(i);
    }
    let array = arr.join(', ')
    return array;
}
console.log(`Kata04: ${kata4()}`);

function kata5() {
    let arr = [];
    for(let i = 25; i > -26; i--){
        if(i % 2 == 1 || i % 2 == -1){
            arr.push(i);
        }
    }
    let array = arr.join(', ')
    return array;
}
console.log(`Kata05: ${kata5()}`);

function kata6() {
    let arr = [];
    for(let i = 1; i < 101; i++){
        if(i % 3 == 0){
            arr.push(i);
        }
    }
    let array = arr.join(', ')
    return array;
}
console.log(`Kata06: ${kata6()}`);

function kata7() {
    let arr = [];
    for(let i = 1; i < 101; i++){
        if(i % 7 == 0){
            arr.push(i);
        }
    }
    let array = arr.join(', ')
    return array;
}
console.log(`Kata07: ${kata7()}`);

function kata8() {
    let arr = [];
    for(let i = 100; i > 0; i--){
        if(i % 3 == 0 || i % 7 == 0){
            arr.push(i);
        }
    }
   let array = arr.join(', ')
    return array;
}
console.log(`Kata08: ${kata8()}`);

function kata9() {
    let arr = [];
    for(let i = 0; i < 101; i++){
        if(i % 2 !== 0 && i % 5 == 0){
            arr.push(i);
        }
    }
    let array = arr.join(', ')
    return array;
}
console.log(`Kata09: ${kata9()}`);

function kata10() {
    let arr = sampleArray.join(', ')
    return arr;
}
console.log(`Kata10: ${kata10()}`)

function kata11() {
    let arrayVer = sampleArray
    let arr = [];
    for(let i = 0; i < arrayVer.length; i++){
        if(arrayVer[i] % 2 == 0){

            arr.push(arrayVer[i])
        }
    }
    let refino = arr.join(', ')
return refino;
}
console.log(`Kata11: ${kata11()}`)

function kata12() {
    let arrayVer = sampleArray
    let arr = [];
    for(let i = 0; i < arrayVer.length; i++){
        if(arrayVer[i] % 2 !== 0){

            arr.push(arrayVer[i])
        }
    }
    let refino = arr.join(', ')
return refino;
}
console.log(`Kata12: ${kata12()}`)

function kata13() {
    let arrayVer = sampleArray
    let arr = [];
    for(let i = 0; i < arrayVer.length; i++){
        if(arrayVer[i] % 8 == 0){

            arr.push(arrayVer[i])
        }
    }
    let refino = arr.join(', ')
return refino;
}
console.log(`Kata13: ${kata13()}`)

function kata14() {
    let arrayVer = sampleArray
    let arr = [];
    for(let i = 0; i < arrayVer.length; i++){
        arr.push(arrayVer[i] * arrayVer[i])
    }
    let refino = arr.join(', ')
return refino;
}
console.log(`Kata14: ${kata14()}`)

function kata15() {
    let soma = 0
    for(let i = 1; i < 21; i++){
        soma += i;
    }
    return soma;
}
console.log(`Kata15: ${kata15()}`)

function kata16() {
    let arrayVer = sampleArray
    let soma = 0;
    for(let i = 0; i < arrayVer.length; i++){
        soma += arrayVer[i]
    }
    
return soma;
}
console.log(`Kata16: ${kata16()}`)

function kata17(arr) {
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){  
        if(arr[i] < min){
            min = arr[i];
        }
     }
     return min;
}
console.log(`Kata 17: ${kata17(sampleArray)}`)

function kata18(arr) {
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){  
        if(arr[i] > max){
            max = arr[i]
        }
     }
     return max;
}
console.log(`Kata18: ${kata18(sampleArray)}`)

