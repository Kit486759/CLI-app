const process = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const figlet = require('figlet');

const ascii = require('./ascii')

const chalk = require('chalk');

const cliSelect = require('cli-select');

// const { resolve } = require('path');
const os = require('os');
const memory = Math.round(os.freemem() / 1024 / 1024)
const totMemory = Math.round(os.totalmem() / 1024 / 1024)

const dGreen = (text) => {
    return chalk.bold.rgb(0, 143, 17)(text)
}

const qStyle = (text) => {
    // return chalk.bold.rgb(0, 143, 17)(text)
    return chalk.bold.rgb(0, 255, 65)(text)
}

const aStyle = (text) => {
    return chalk.rgb(236, 46, 51)(text)
}

const bStyle = (text) => {
    return chalk.rgb(58, 82, 201)(text)
}

const dialog = {
    q1: `Anonymous: Wake up, `,
    a1: `a: Wake up.`, b1: `b: Stay down.`,
    q2: `(Loud alarm sound from your computer....)`,
    q3: `Have you ever think about our world is not real?`,
    a3: `a: Yes. But who are you?`, b3: `b: No, leave me alone.`,
    q4: `Doesn't matter, I am the one to help you out.`,
    a4: `a: I don't trust you.`, b4: `b: Haha, out? From what?`,
    q5: `I know everything of you.
(Text shows up from monitor)
User id ${os.hostname()}
Windows version ${os.release()} ${os.platform()} ${os.arch()}
CPU core(s):${os.cpus().length}
Memory ${memory}/${totMemory}(Mb)`,
    a5: `a: Ok, go on.`, b5: `b: Shut up Hacker!`,
    q6: `The world you live is a giant simulator.`,
    a6: `a: Prove it.`, b6: `b: You are out of your mind. Bye!`,
    q7: `Someone coming to you, get out there now - Anonymous disconnected`,
    a7: `a: Checkout the door.`, b7: `b: Stay.`,
    q8: `Anonymous disconnected  (Someone knocking the door....)`,
    q9: `(Someone knocking the door....) [a: Checkout the door. / b: Stay.]`,
    q10: `Anonymous: What are you talking about?`
}

const ending = {
    a1: 'You slept and start a new day... its just normal a dream of your real life...'
}

const toBeContinue = () => {
    console.log(ending.a1)
    figlet(`To be continue`,
        {
            font: 'Nancyj',
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

const gameOver = (end) => {
    if (end === "endingB") {
        console.log(ending.a1)
    }else{
        console.log(`ending b`)
    }

    figlet(`GAME OVER`,
        {
            font: 'Nancyj',
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


const end = () => {
    console.log(`(Neo walks toward the door....)`)
    console.log(`(He checkout through the peephole, there is a skinny guy with a rabbit tattoo...)`)
    console.log(`To be continue.....`)
    process.exit()
}

const q9 = () => {
    rl.question(`${qStyle(dialog.q9)}\n[ ${aStyle(dialog.a7)} / ${bStyle(dialog.b7)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            end(`endingB`)
        } else if (answer.trim() === `b`) {
            q9()
        } else {
            q9()
        }
    })
}

const q8 = () => {
    rl.question(`${qStyle(dialog.q8)}\n[ ${aStyle(dialog.a7)} / ${bStyle(dialog.b7)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            end()
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
            end()
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
            console.log(`gameover`)
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
            gameOver('endingB')
        } else {
            // console.log(`${qStyle(dialog.q10)}`)
            q2()
        }
    })
}

const q1 = (name) => {
    console.log(dGreen(ascii.computer))
    rl.question(`${qStyle(dialog.q1 + name + `...`)}\n[ ${aStyle(dialog.a1)} / ${bStyle(dialog.b1)} ]`, (answer) => {
        if (answer.trim() === `a`) {
            q3()
        } else if (answer.trim() === `b`) {
            q2()
        } else {
            // console.log(`${qStyle(dialog.q10)}`)
            q1()
        }
    })
}

const title = () => {

    return new Promise((resolve, reject) => {
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
    await title()
    rl.question(`What is your name?`, (name) => {
        q1(name)
    })

}

init()



