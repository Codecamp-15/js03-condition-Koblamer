let Username = (prompt('Enter your username'));

let Password = (prompt('Enter your password'));

if ( Username == '') {
    alert('Username is required');
} 

else if (Password == '') {
    alert('Password is required');
}
else if ((Username == 'admin' && Password == '1234') || (Username == 'john' && Password == 'qwerty')) {
    alert('Hello ' + Username);
}
else{
    alert ('invalid username or password')};
