const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// using the HTTP Request object res to send some text to the client
app.get('/', (req, res) => {
    res.send('Hello Express!');
})

app.get('/echo', (req, res) => {
    const responseText = `Here are some details of your request:
        Base URL: ${req.baseUrl}
        Host: ${req.hostname}
        Path: ${req.path}
        IP: ${req.ip}
        Route: ${req.route}
    `;
    res.send(responseText);
})

app.get('/queryViewer', (req, res) => {
    console.log(req.query.name);
    res.end();
})

app.get('/burgers', (req, res) => {
    res.send('Burgers, here!')
})

app.get('/sum', (req, res) => {
    const numbA = parseInt(req.query.a);
    const numbB = parseInt(req.query.b);

    const message = `The sum of ${numbA} and ${numbB} is ${numbA + numbB}.`;

    res.send(message);
})


app.get('/cipher', (req, res) => {
    const startingText = req.query.text.toUpperCase();
    const shift = parseInt(req.query.shift);

    //const newText = `Start with '${startingText}' and shift it ${shift} positions.`;

    let cipheredText = '';

    for (let i=0 ; i<startingText.length ; i++) {
        
        let newCode = startingText.charCodeAt(i) + shift;

        if (newCode > 90) {
            newCode = newCode - 26;
        }

        cipheredText += String.fromCharCode(newCode);
    }
    
    res.send(cipheredText);
    
})

app.get('/lotto', (req, res) => {
    const numbers = req.query.arr;

    let message = '';

    message = `The requested numbers are: ${numbers}.\n`;

    
    let lottoArray = [];
    for (let i=0 ; i<6 ; i++) {
        let newLottoNumber = Math.floor(Math.random() * Math.floor(20));
        if (lottoArray.includes(newLottoNumber)) {
            console.log('We have a repeat!');
        } else {
            lottoArray.push(newLottoNumber);
        }
    }

    message += `The winning numbers are: ${lottoArray}.\n`;

    

    let hitCount = 0;
    for (let i=0 ; i<numbers.length ; i++) {
        message += `Considering ${numbers[i]}\n`
        if (lottoArray.includes(parseInt(numbers[i]))) {
            message += 'Hit!\n';
            hitCount ++;
        }
    }

    message += `You got ${hitCount} hit[s].\n`;

    if (hitCount < 4) {
        message += `Sorry, with a hitCount of ${hitCount}, you lose.`;
    } else if (hitCount === 4) {
        message += 'Congrats, free ticket 4 u!';
    } else if (hitCount === 5) {
        message += 'Congrats, $100!';
    } else if (hitCount === 6) {
        message += 'Incredible! US$1M!';
    }
  
    res.send(message);
})

app.get('/greetings', (req, res) => {
    //1. get values from the request
    const name = req.query.name;
    const race = req.query.race;
  
    //2. validate the values
    if(!name) {
      //3. name was not provided
      return res.status(400).send('Please provide a name, sucka');
    }
  
    if(!race) {
      //3. race was not provided
      return res.status(400).send('Please provide a race');
    }
  
    //4. and 5. both name and race are valid so do the processing.
    const greeting = `Greetings ${name} the ${race}, welcome to our kingdom.`;
  
    //6. send the response 
    res.send(greeting);
});

// use port 8000
app.listen(8000, () => {
    console.log('Express server listening on port 8000!');
})