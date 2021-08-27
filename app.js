// Require core module process and readline
const process = require('process');
const readline = require('readline');

// Readline listen user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Npm module - Figlet - Convert text to ASCII pattern
const figlet = require('figlet');
// Npm module - Chalk - Text styling
const chalk = require('chalk');

// Import external file - ascii art
const ascii = require('./ascii')
// Import external file - dialog
const { dialog, endingDialog } = require('./dialog')


// Set up chalk function- style for the text
const dGreen = (text) => {
    return chalk.bold.rgb(0, 143, 17)(text)
}
const qStyle = (text) => {
    return chalk.bold.rgb(0, 255, 65)(text)
}
const aStyle = (text) => {
    return chalk.rgb(236, 46, 51)(text)
}
const bStyle = (text) => {
    return chalk.rgb(58, 82, 201)(text)
}

// Depend on ending, display different dialog 
const ending = (end) => {

    if (end === "endingA") {
        console.log(endingDialog.a1)
        console.log(qStyle(endingDialog.a2))
        console.log(endingDialog.a3)
        console.log(qStyle(endingDialog.a4))
        console.log(endingDialog.a5)

        figlet(`TO BE CONTINUE`,
            {
                font: 'Nancyj',
                horizontalLayout: 'fitter',
            },
            function (err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                console.log(aStyle(data))
                process.exit()
            });

    } else if (end === "endingB") {
        console.log(endingDialog.b1)
    } else if (end === "endingC") {
        console.log(endingDialog.b2)
    }

    figlet(`GAME OVER`,
        {
            font: 'Nancyj',
            horizontalLayout: 'fitter',
        },
        function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(bStyle(data))
        });
    process.exit()
}

const q19 = () => {
    rl.question(`${dialog.q19}\n[ ${aStyle(dialog.a19)} / ${bStyle(dialog.b19)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            ending(`endingA`)
        } else if (answer.trim() === `b`) {
            q14()
        } else { q15() }
    })
}

const q18 = () => {
    rl.question(`${dialog.q18}\n[ ${aStyle(dialog.a18)} / ${bStyle(dialog.b18)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q15()
        } else if (answer.trim() === `b`) {
            ending(`endingB`)
        } else { q18() }
    })
}

const q17 = () => {
    rl.question(`${dialog.q17}\n[ ${aStyle(dialog.a17)} / ${bStyle(dialog.b17)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q14()
        } else { q17() }
    })
}

const q16 = () => {
    rl.question(`${dialog.q16}\n[ ${aStyle(dialog.a16)} / ${bStyle(dialog.b16)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q13()
        } else if (answer.trim() === `b`) {
            q17()
        } else { q15() }
    })
}

const q15 = () => {
    rl.question(`${dialog.q15}\n[ ${aStyle(dialog.a15)} / ${aStyle(dialog.b15)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            ending(`endingA`)
        } else if (answer.trim() === `b`) {
            ending(`endingB`)
        } else { q15() }
    })
}

const q14 = () => {
    rl.question(`${dialog.q14}\n[ ${aStyle(dialog.a14)} / ${bStyle(dialog.b14)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q15()
        } else if (answer.trim() === `b`) {
            ending(`endingB`)
        } else { q14() }
    })
}

const q13 = () => {
    rl.question(`${dialog.q13}\n[ ${aStyle(dialog.a13)} / ${bStyle(dialog.b13)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q18
        } else if (answer.trim() === `b`) {
            q14()
        } else { q13() }
    })
}

const q12 = () => {
    rl.question(`${dialog.q12}\n[ ${aStyle(dialog.a12)} / ${bStyle(dialog.b12)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q18()
        } else if (answer.trim() === `b`) {
            q13()
        } else { q12() }
    })
}

const q11 = () => {
    rl.question(`${dialog.q11}\n[ ${aStyle(dialog.a11)} / ${bStyle(dialog.b11)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q19()
        } else if (answer.trim() === `b`) {
            q9()
        } else { q11() }
    })
}

const q10 = () => {
    rl.question(`${dialog.q10}\n[ ${aStyle(dialog.a10)} / ${bStyle(dialog.b10)} / ${aStyle(dialog.c10)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q11()
        } else if (answer.trim() === `b`) {
            q9()
        } else if (answer.trim() === `c`) {
            q16()
        } else { q10() }
    })
}

const q9 = () => {
    rl.question(`${qStyle(dialog.q9)}\n[ ${aStyle(dialog.a7)} / ${bStyle(dialog.b7)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q12()
        } else if (answer.trim() === `b`) {
            q9()
        } else { q9() }
    })
}

const q8 = () => {
    rl.question(`${qStyle(dialog.q8)}\n[ ${aStyle(dialog.a7)} / ${bStyle(dialog.b7)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q12()
        } else if (answer.trim() === `b`) {
            q9()
        } else {
            q8()
        }
    })
}

const q7 = () => {
    rl.question(`${qStyle(dialog.q7)}\n[ ${aStyle(dialog.a7)} / ${bStyle(dialog.b7)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q10()
        } else if (answer.trim() === `b`) {
            q9()
        } else {
            q7()
        }
    })
}

const q6 = () => {
    console.log(dGreen(ascii.city))
    rl.question(`${qStyle(dialog.q6)}\n[ ${aStyle(dialog.a6)} / ${bStyle(dialog.b6)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q7()
        } else if (answer.trim() === `b`) {
            q8()
        } else {
            q6()
        }
    })
}

const q5 = () => {
    rl.question(`${qStyle(dialog.q5)}\n[ ${aStyle(dialog.a5)} / ${bStyle(dialog.b5)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q6()
        }
        else if (answer.trim() === `b`) {
            q8()
        } else {
            q5()
        }
    })
}

const q4 = () => {
    rl.question(`${qStyle(dialog.q4)}\n[ ${aStyle(dialog.a4)} / ${bStyle(dialog.b4)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q5()
        } else if (answer.trim() === `b`) {
            q6()
        } else {
            q4()
        }
    })
}

const q3 = () => {
    rl.question(`${qStyle(dialog.q3)}\n[ ${aStyle(dialog.a3)} / ${bStyle(dialog.b3)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q4()
        } else if (answer.trim() === `b`) {
            q8()
        } else {
            q3()
        }
    })
}

const q2 = () => {
    rl.question(`${dialog.q2}\n[ ${aStyle(dialog.a1)} / ${bStyle(dialog.b1)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q3()
        } else if (answer.trim() === `b`) {
            ending('endingC')
        } else {
            q2()
        }
    })
}

const q1 = (name) => {

    // Display ASCII grahic
    console.log(dGreen(ascii.computer))

    // Start readline question
    rl.question(`${qStyle(dialog.q1 + name + `...`)}\n[ ${aStyle(dialog.a1)} / ${bStyle(dialog.b1)} ]`, (answer) => {

        //    Mulitple choice, each pass to different stages
        if (answer.trim() === `a`) {
            q3()
        } else if (answer.trim() === `b`) {
            q2()
        } else {
            // Any other input will rerun the question
            q1()
        }
    })
}

// ASCII title
const title = () => {
    return new Promise((resolve, reject) => {
        // Title input 
        figlet.text('THE MAZE TRICK',
            {
                font: 'Nancyj',
                // font:'the edge',
                horizontalLayout: 'fitter',
                // verticalLayout:'full',
                // width: 500
            },
            function (err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                console.log(qStyle(data))
                resolve()
            });
    })
}

const init = async () => {
    // Display title
    await title()

    // Require player name
    rl.question(`What is your name?`, (name) => {
        if (name) {
            q1(name.trim())
        }

        // Create a instant prompt in next line to ensure correct input
        rl.setPrompt('Please enter your name\n');
        // Activate prompt
        rl.prompt();
        // Listen user input
        rl.on('line', (input) => {
            // Process if got input
            if (input) {
                q1(input.trim())
            } else {
                // Loop again
                rl.setPrompt('Please enter your name\n');
                rl.prompt();
            }
        })
    })
}

init()



