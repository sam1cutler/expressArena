
const queryArray = [8,9,17,20,1,4];

let lottoArray = [];

for (let i=0 ; i<6 ; i++) {
    let newLottoNumber = Math.floor(Math.random() * Math.floor(20));

    if (newLottoNumber in lottoArray) {
        console.log('We have a repeat!');
    } else {
        lottoArray.push(newLottoNumber);
    }
}

console.log(`The winning numbers are: ${lottoArray}.`);


console.log('Now, lets look at your selections:')

let hitCount = 0;

for (let i=0 ; i<queryArray.length ; i++) {
    console.log(queryArray[i])
    if (lottoArray.includes(queryArray[i])) {
        console.log(`Found ${queryArray[i]} in the lotto numbers.`)
        hitCount ++;
    }
}

console.log(`You got ${hitCount} hits.`);
