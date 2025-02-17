
function calculateVAT( price ) {
    if(typeof price !== "number" || price<0){
        return "Invalid";
    }

    const vatRate = 7.5;
    const vat = price * vatRate / 100;
    return vat
}




function validContact(contact) {
    if (typeof contact !== 'string') {
        return "Invalid";
    }
    if (contact.length !== 11 || !contact.startsWith("01") || contact.includes(" ")) {
        return false;
    }
    return true;
}



function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let passCount = 0;
    let failCount = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 50) {
            passCount++;
        } else {
            failCount++;
        }
    }

    if (passCount > failCount) {
        return true;
    } else {
        return false;
    }
}



function validProposal(person1, person2) {
    if (typeof person1 !== 'object' || typeof person2 !== 'object' || person1 === null || person2 === null) {
        return "Invalid";
    }
    
    if (person1.gender === person2.gender) {
        return false;
    }
    
    const ageDifference = Math.abs(person1.age - person2.age);
    
    if (ageDifference > 7) {
        return false;
    }
    
    return true;
}


function calculateSleepTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }
    
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== 'number') {
            return "Invalid";
        }
    }
    
    let totalSeconds = 0;
    for (let i = 0; i < times.length; i++) {
        totalSeconds += times[i];
    }
    
    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor((totalSeconds % 3600) / 60);
    const second = totalSeconds % 60;
    
    return { hour, minute, second };
}