// เปลี่ยน if else ข้างล่างให้อยู่ในรูปแบบของ Ternary Operators

// let login = prompt('Enter username');
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// ====

// let login = prompt('Enter username');
// let message = login == 'Employee' = 'Hello';
// let message = login == 'Director' =  'GReeting';
// let message = login == '' = 'No login';
// let message = '' == '' = '';

-----
//<=====เฉลย======>

message = login == 'Employee' ? 'Hello' 
        : login === 'Director'? 'Greeting' 
        : login == '' ? 'No login' : '' ;

