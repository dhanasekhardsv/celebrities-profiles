export default function getFirstLastNames(fullName) {
    let namesArr = fullName.split(' ');

    let firstName = '';
    let lastName = '';
    if (namesArr.length === 1) {
        firstName = namesArr[0];
        lastName = '';
    }
    else if (namesArr.length === 2) {
        firstName = namesArr[0];
        lastName = namesArr[1];
    }
    else {
        firstName = namesArr.slice(0, namesArr.length - 1).join(' ');
        lastName = namesArr[namesArr.length - 1];
    }
    return { firstName, lastName };
}