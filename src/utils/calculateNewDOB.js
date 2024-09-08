export default function calculateNewDOB(oldDOB, updatedAge) {
    let today = new Date();
    let oldDate = new Date(oldDOB);
    let updatedYear = today.getFullYear() - updatedAge;
    let newDOB = `${updatedYear - 1}-${oldDate.getMonth()}-${oldDate.getDate()}`;
    return newDOB;
}