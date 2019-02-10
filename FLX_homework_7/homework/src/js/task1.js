let userName = prompt('Enter your User Name');
if (userName === '' || userName === null) {
    alert('Canceled');
} else if (userName.length < 4 ) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else if (userName !== 'User' && userName !== 'Admin') {
    alert('I don\'t know you');
} else {
    let userPassword = prompt('Enter your Password');
    if (userPassword === '' || userPassword === null) {
        alert('Canceled');
    } else if (userName === 'User' && userPassword !== 'UserPass') {
        alert('Wrong password');
    } else if (userName === 'Admin' && userPassword !== 'RootPass') {
        alert('Wrong password');
    } else {
        const currentHours = new Date().getHours();
        const partOfDay = currentHours < 20 ? 'day' : 'evening';
        const greating = `Good ${partOfDay}, dear ${userName}!`;
        alert(greating);
    }
} 

