var sayi1 = 60000
var sayi2 = 400
var sayi3 = 3000

//En Büyük sayıyı bulma benim algoritma
// if (sayi1 > sayi2) {
//     if (sayi1 > sayi3) {
//         console.log(sayi1 + ' ' + sayi2 + ' ' + sayi3 + ' ' + 'Arasındaki en büyük sayı---> ' + sayi1)
//     }
//     else if (sayi3 > sayi2) {
//         console.log(sayi1 + ' ' + sayi2 + ' ' + sayi3 + ' ' + 'Arasındaki en büyük sayı---> ' + sayi3)
//     }
// }
// else if (sayi2>sayi3){
//     console.log(sayi1+' '+sayi2+' '+sayi3+' '+'Arasındaki en büyük sayı---> '+sayi2)
// }else{
//     console.log(sayi1 + ' ' + sayi2 + ' ' + sayi3 + ' ' + 'Arasındaki en büyük sayı---> ' + sayi3)
// } 

var enBüyük=sayi1
if(enBüyük<sayi2){
    enBüyük=sayi2
}if (enBüyük<sayi3){
    enBüyük=sayi3 
}
console.log('En büyük sayı---> '+enBüyük)
