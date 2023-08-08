let num = Number(prompt('Please enter number'));

// console.log(typeof num)      
// console.log(typeof Number(num)) 

if(num > 0) {
    alert('Positive number');
} else if(num == 0) {
    alert('Zero')
} 
else if (num < 0){
    alert('Negative number')
} 
else {
    alert('Invalid Number!')
} 



//--------- Note ---------//

console.log() ใช้เพื่อกำหนดค่าให้ข้อความถูก print ออกมา
ในที่นี้ เราสามารถ recheck Datatype ว่าเป็นประเภทไหน ในที่นี้เราต้องการให้เป็น Number


จึงได้ cast Datatype จาก String ให้เป็น Number (ในบรรทัดแรก)
let num = Number(prompt('Please enter number'));

//--------- Note end---------//

