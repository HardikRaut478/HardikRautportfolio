function scrollToTarget1() {
    document.getElementById('AboutDiv').scrollIntoView({
        behavior: 'smooth' 
    });
}


function scrollToTarget2() {
    document.getElementById('ServiceDiv').scrollIntoView({
        behavior: 'smooth' 
    });
}

function scrollToTarget3() {
    document.getElementById('ResumeDiv').scrollIntoView({
        behavior: 'smooth' 
    });
}


function scrollToTarget4() {
    document.getElementById('ProjectDiv').scrollIntoView({
        behavior: 'smooth' 
    });
}


function scrollToTarget5() {
    document.getElementById('ContactDiv').scrollIntoView({
        behavior: 'smooth' 
    });
}





function clearInputs(ids) {
    ids.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.value = '';
        }
    });
    alert("Your response has been submitted!");
}