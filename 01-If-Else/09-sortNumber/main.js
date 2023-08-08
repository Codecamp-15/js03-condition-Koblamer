//------------เฉลย วิธีที่ 1---------------//
let max;
let mid;
let min;

if (x>y && x > z){
    max = x;
    if (y>z){
        mid = y;
        min = z;
    } else{
        mid = z;
        min = y;
    }
} else if (Y > x && y > z) {
    max = y;
    if (x>z) {
        mid = x;
        min = z;
    } else {
        mid = z;
        min = x;
    }
} else if (z > x && z > y ) {

}   max = z;
    if (x>z) {
        mid = Y;
        min = x;
    } else {
        mid = x;
        min = Y;
    }
console.log(`${max} : ${mid} : ${min}`)

 //------------เฉลย วิธีที่ 1 end---------------//

 //-----------วิธีที่ 2------------//

if (x >= y && x >= z && y >= z) {
    // x y z
    max = x;
    min = y;
    min = z;

}else if (y >= x && y >= z && x >= z) {
        // y x z
        max = y;
        min = x;
        min = z;

        //ทำแบบนี้ไปเรื่อยๆ จนครบ

}





 //-----------วิธีที่ 2 end------------//


 /// อยู่ใน I-pad  Screenshot   //
 
 