//จงหาผลลัพธ์จากการใช้ console.log ในแต่ละ statement

console.log('1' > 4); // false 
        '1' เป็น string แปลง string เป็น Number ก่อน
        ดังนั้น 1 > 4 ตอบ false

console.log('' <= 1); // true
        

console.log('apple' > 'pineapple'); // false


console.log(undefined == null); // true 
//(soft meaning ของทั้งสองคำนี้คือ ไม่มีค่าใดๆ ไม่เท่ากับ 0 ไม่เท่ากับ stringว่าง '' ไม่มีค่าใดๆ)


console.log(undefined === null);  // false 
//(deep meaning ของทั้งสองคำนี้คือ ไม่มีค่า แต่ต่างกันตรงที่ undefined คือ ตัวแปรที่ยังไม่ได้ประกาศ
ืี// null คือ ตัวแปรที่ประกาศไปแล้วแต่ไม่มีการกำหนดค่าให้มัน )

console.log(NaN !== 2); // true
// NaN คือ Not a number
//   !== แปลว่า ไม่เท่ากับ

console.log(NaN == NaN); //false

console.log(NaN === NaN);  //false


/// ---------เฉลยอยู่ข้างล่าง ---------- ///

Note :
test = test      = 1 ตัว แทนค่าขวาไปทางซ้าย
test == tesT     == 2 ตัว เป็นการเทียบซ้ายขวาแบบคร่าวๆ soft meaning เช่น ถ้า test == tEst ผลลัพธ์คือ true
test === tesT     === 3 ตัว เป็นการเทียบซ้ายขวาแบบทุกตัวอักษร เช่น ถ้า test === tEst ผลลัพธ์คือ false

undefined คือ ตัวแปรที่ยังไม่ได้ประกาศ
ืีnull คือ ตัวแปรที่ประกาศไปแล้วแต่ไม่มีการกำหนดค่าให้มัน 



//เฉลยอยู่ข้างล่าง//


















//เฉลย









//เฉลย
console.log('1' > 4); // false
console.log('' <= 1); // 0 <= 1 => true  //
console.log('apple' > 'pineapple'); //f
console.log(undefined == null); // true
console.log(undefined === null);  //false
console.log(NaN !== 2); //true
console.log(NaN == NaN); //false
console.log(NaN === NaN);f //false