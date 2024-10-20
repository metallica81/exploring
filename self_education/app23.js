// if (browser === "Edge") {
//     alert("You've got the Edge!");
// }
// if (browser === "Edge"
//     || browser === "Firefox"
//     || browser === "Safari"
//     || browser === "Opera") 
//     alert('Okay we support these browsers too');

// else {
//     alert( 'We hope that this page looks ok!' );
// }


// const num = prompt("smth");

// switch(num) {
//     case(0):
//         alert('Вы ввели число 0')
//         break; 
    
//     case(1):
//         alert('Вы ввели число 1');
//         break;
    
//     case(2):
//     case(3):
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }

function checkSmth (age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
