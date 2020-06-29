function banner(challengeNumber) {
    return "######### Challenge " + challengeNumber + " #########";
}

console.log(banner(1));



function vowelsOnly(str) {
    const values = "aeiouy";

    let i = 0;
    
    while (i < str.length) {
        if (values.includes(str[i])) {
        console.log(str[i]);
        }
      i ++;
    }
}

vowelsOnly("Regular expressions are for term 2");

console.log(banner(2));

function firstFive(str) {
    const values = "aeiouy";
    let tracker = 0;
    let i = 0;

    while (i < str.length) {
        if (values.includes(str[i]) && tracker < 5) {
        console.log(str[i]);
        tracker ++;
        } 
        i ++;
    } 
}

firstFive("Regular expressions are for term 2");

console.log(banner(3));

function everyThird(str) {
    let i = 2;

    while (i < str.length) {
        console.log(str[i]);
        i = i + 3;
}
}

everyThird('I am the alfalfa and the omelette.');

console.log(banner(4));

function firstFour(str, startFrom) {
    let i = startFrom;

    while (i < startFrom + 4 && i < str.length) {
        console.log(str[i]);
        i++;
    }
}

firstFour("Oh hi, I didn't see you there. Welcome.", 4);

firstFour("Oh hi, I didn't see you there. Welcome.", 36);

console.log(banner(5));

function indexOfU(str) {
    let i = 0;

    while (i < str.length) {
        if (str[i] === "u") {
        console.log(i);
        }
        i++;
    }
}

indexOfU('You picked the wrong house, bub.');

console.log(banner(6));

function firstU(str) {
    let i = 0;

    while (i < str.length) {
        if (str[i] === 'u') {
        console.log(i);
        return;
        }
        i++;
    }
}

firstU('You picked the wrong house, bub.');

console.log(banner(7));

function foundU(str) {
    let found = false;
    let i = 0;

    while (i < str.length) {
        if (str[i] === 'u' && found === false) {
        console.log(i);
        
        found = true;
        }
        i++;
    }
            if (found === false) {
            console.log("-1");
    }
}

foundU("I'm Canadian")