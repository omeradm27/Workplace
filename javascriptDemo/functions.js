var degisken='Değer '
function sayiUret(ustlimit=49){
    console.log(degisken)
    return Math.ceil(Math.random()*ustlimit)
    
}
var sayi1=sayiUret()
var sayi2=sayiUret(20)
var sayi3=sayiUret(100)
var sayi4=sayiUret(99)
var sayi5=sayiUret(45)
var sayi6=sayiUret(56)
console.log('Kolon : '+sayi1+' '+sayi2+' ' +sayi3+' '+sayi4+' '+sayi5+' ' +sayi6+'')
