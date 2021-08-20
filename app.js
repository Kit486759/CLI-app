const process = require('process');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const figlet = require('figlet');

const ascii = require('./ascii')

const chalk = require('chalk');

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

let yourName = ""

const setName = (name) =>{
    name = yourName
}

const dialog = {
    q1: `Anonymous: Wake up, `,
    a1: `a: Wake up.`, b1: `b: Stay down.`,
    q2: `(Loud alarm sound from your computer....)`,
    q3: `Anonymous: Have you ever think about our world is not real?`,
    a3: `a: Yes. But who are you?`, b3: `b: No, leave me alone.`,
    q4: `Anonymous: Doesn't matter, I am the one to help you out.`,
    a4: `a: I don't trust you.`, b4: `b: Haha, out? From what?`,
    q5: `Anonymous: I know everything of you.
(Text shows up from monitor)
User id ${os.hostname()}
Windows version ${os.release()} ${os.platform()} ${os.arch()}
CPU core(s):${os.cpus().length}
Memory ${memory}/${totMemory}(Mb)`,
    a5: `a: Ok, go on.`, b5: `b: Shut up Hacker!`,
    q6: `Anonymous: The world you live is a giant simulator.`,
    a6: `a: Prove it.`, b6: `b: You are out of your mind. Bye!`,
    q7: `Anonymous: Someone coming to you, get out there now!! - Anonymous disconnected`,
    a7: `a: Look out the window.`, b7: `b: Stay.`,
    q8: `Anonymous disconnected  (Someone knocking the door....)`,
    a8: `a: Checkout the door.`, b8: `b: Stay.`,
    q9: `(Someone knocking the door....) [a: Checkout the door. / b: Stay.]`,
    a9: `a: Checkout the door.`, b9: `b: Stay.`,
    q10: `(You see empty alley except three man with suit loading their guns and walking toward your building.)`,
    a10: `a: Climb out the window.`, b10: `b: Stay.`, c10: `c: Go out.`,
    q11: `(You are fear and starting to sweat)`,
    a11: `a: Step on the pipe around the building.`, b11: `b: Back to your apartment.`,
    q12: `(You see three man with suit outside the door)`,
    a12: `a: Open the door.`, b12: `b: Stand back and keep quiet.`,
    q13: `Suit guy: I know you are there, open the door!)`,
    a13: `a: Open the door.`, b13: `b: Stay.`,
    q14: `(BAM!! BAM!! the guys break in your department, one of them put out a gun and point to your head)`,
    a14: `a: Jump through the window behind you.`, b14: `b: I didnt do anything. Please dont kill me!!.`,
    q15: `(You didnt fall luckly hang on the pipe around the building and you look down there is a gaint trash bin)`,
    a15: `a: Take the chance to jump in.`, b15: `b: Its too high, I dont want to die. You climb back in.`,
    q16: `(You are nervous, you try to run to elevator, but at the time elevator is open with three suit man there.)`,
    a16: `a: Turn back to your place.`, b16: `b: Try to run through them`,
    q17: `Suit guy: You cant run away (They drag you back in apartment)`,
    a17: `a: You struggle but its useless.`,
    q18: `(They walk in and close the door, one of them put out a gun and point to your head)`,
    a18: `a: Jump through the window behind you.`, b18: `b: I didnt do anything. Please dont kill me!!.`,
    q19: `(You look down there is a gaint trash bin.)`,
    a19: `a: Take the chance to jump in.`, b19: `b: Its too high, I dont want to die. You climb back in.`,
}

const endingDialog = {
    a1: `(You land on the trash, you feel a lot of pain...)`,
    a2: `Someone: Wake up...`,
    a3: `(You wake up in a smelly dirty room)`,
    a4: `Someone: Wellcome to the real world...`,
    a5: `Oh my god, what have I done.`,
    b1: 'BAM... You can barely feel any pain... (******sound of alarm*******  You wake up at morning, it\'s just a dream.)'
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
    // process.exit()
}

const ending = (end) => {


    if (end === "endingB") {
        console.log(endingDialog.b1)
    } else if (end === "endingA") {
        console.log(endingDialog.a1)
        console.log(endingDialog.a2)
        console.log(endingDialog.a3)
        console.log(endingDialog.a4)
        console.log(endingDialog.a5)
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
    // process.exit()
}


// const end = () => {
//     console.log(`(Neo walks toward the door....)`)
//     console.log(`(He checkout through the peephole, there is a skinny guy with a rabbit tattoo...)`)
//     console.log(`To be continue.....`)
//     process.exit()
// }

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
        }  else { q17() }
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
        setName(name)
    })

}

init()



