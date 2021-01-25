function checkNumber (num){
    if(num<0){
        console.log(`it's a negative number`);
    }
    else if(num == 0){
        console.log(`it's a Zero`)
    }
    else{
        console.log(`it's a postive number`);
    }
}

checkNumber(0)

function wordChecker(word){
    const lowerCase = (word=='a' || word == 'e' || word == 'i' || word == 'o' || word == 'u' );
    const upperCase = (word=='A' || word == 'E' || word == 'I' || word == 'O' || word == 'U' );
    if(lowerCase || upperCase){
        console.log(`it's a vowel`);
    } 
    else{
        console.log(`it's a consonant`);
    }
}
wordChecker('p');

function checkUpperCaseOrLowerCase (char){
    if(char >= 'A' && char <= 'Z'){
        console.log("upperCase")
    }
    else{
        console.log("lower case")
    }
}
checkUpperCaseOrLowerCase('m')

function findDaysAndLeapYear(monthNumber,year){
    if (monthNumber ==2 && year % 4 ==0 ) {
        console.log(`it is february .and days has 29`);
    } else {
        console.log(`it is february .and days has 28`);
    }

    if(monthNumber == 1){
        console.log(`it is january .and days has 31`);
    }
    else if (monthNumber == 3){
        console.log(`it is march .and days has 31`);
    }
    else if (monthNumber == 4){
        console.log(`it is april .and days has 30`);
    }
    else if (monthNumber == 5){
        console.log(`it is may .and days has 31`);
    }
    else if (monthNumber == 6){
        console.log(`it is june .and days has 30`);
    }
    else if (monthNumber == 7){
        console.log(`it is july .and days has 31`);
    }
    else if (monthNumber == 8){
        console.log(`it is august .and days has 31`);
    }
    else if (monthNumber == 9){
        console.log(`it is september .and days has 30`);
    }
    else if (monthNumber == 10){
        console.log(`it is october .and days has 31`);
    }
    else if (monthNumber == 11){
        console.log(`it is november .and days has 30`);
    }
    else if (monthNumber == 12){
        console.log(`it is December .and days has 31`);
    }
}
findDaysAndLeapYear(2,2020);

