const process = require('process')
const prompts = require('prompts');

const os = require('os')
const memory = Math.round(os.freemem() / 1024 / 1024)
const totMemory = Math.round(os.totalmem() / 1024 / 1024)

var user = ""

const setUser = (name) => {
   return user = name
}

const init = [
    {
        type: 'text',
        name: 'userName',
        message: 'Who are you?',
        instructions: "Use arrow-keys. Return to submit.",
    },
]

const questions = [
    // {
    //     type: 'text',
    //     name: 'userName',
    //     message: 'Who are you?',
    //     instructions: "Use arrow-keys. Return to submit.",
    // },
    {
        // The question type, there are "confirm","text","number","select", "password" and more
        type: 'select',
        // The response value will store in this name as variable
        name: 'Q1',
        // Display your question
        message: `Wake up... ${user}`,
        // The option user can choose
        choices: [
            { title: `a: Wake up.`, value: 'a' },
            { title: 'b: Stay down.', value: 'b' }
        ],
        // We can add instruction here like 'enter to process'
        instructions: "",
        // format: prev => user = prev
    },
    {
        type: prev => prev == 'a' ? 'select' : null,
        name: 'Q2',
        message: `Have you ever think about our world is not real?`,
        choices: [
            { title: `a: Yes. But who are you?`, value: 'a' },
            { title: 'b: No, leave me alone.', value: 'b' }
        ],
    },
    {
        type: prev => prev == 'b' ? 'select' : null,
        name: 'Q2',
        message: `(Loud alarm sound from your computer....)`,
        choices: [
            { title: `a: Yes. But who are you?`, value: 'a' },
            { title: 'b: No, leave me alone.', value: 'b' }
        ],
    },
    // {
    //     type: 'number',
    //     name: 'value',
    //     message: `How old are you?${user}`,
    //     validate: value => value < 18 ? `Nightclub is 18+ only` : true
    // },
];

(async () => {

   

   const name =  await prompts(init)
//    setUser(name.userName)
//    console.log(user)
    const response = await prompts(questions);
   
    console.log(response)
 

})();



// const dialogAnonymous = {
//     a1: `Wake up, Neo..... [a: Wake up. / b: Stay down.]`,
//     b1: `(Loud alarm sound from your computer....) [a: Wake up.]`,
//     a2: `Have you ever think about our world is not real? [a: Yes. But who are you? / b: No, leave me alone.]`,
//     a3: `It's doesn't matter, I am the one to help you out. [a: I don't trust you. / b: Haha, out? From what?]`,
//     a4: `I know everything of you.
// User id ${os.hostname()}
// Windows version ${os.release()} ${os.platform()} ${os.arch()}
// CPU core(s):${os.cpus().length}
// Memory ${memory}/${totMemory}(Mb)
// [a: Ok, go on. / b: Shut up Hacker!]`,
//     b4: `You are living in a giant simulator created by the machine. [a: Prove it. / b: You are out of your mind. Bye!]`,
//     a5: `Follow the rabbit...Good luck - Anonymous disconnected [a: Checkout the door. / b: Stay.]`,
//     a6: `Anonymous disconnected  (Someone knocking the door....) [a: Checkout the door. / b: Stay.]`,
//     a7: `(Someone knocking the door....) [a: Checkout the door. / b: Stay.]`
// }

// const end = () => {
//     console.log(`(Neo walks toward the door....)`)
//     console.log(`(He checkout through the peephole, there is a skinny guy with a rabbit tattoo...)`)
//     console.log(`To be continue.....`)
//     process.exit()
// }

// const a7 = () => {
//     readline.question(`Anonymous: ${dialogAnonymous.a7}`, (answer) => {
//         if (answer === `a`) {
//             end()
//         } else if (answer === `b`) {
//             a7()
//         } else {
//             a7()
//         }
//     })
// }

// const a5 = () => {
//     readline.question(`Anonymous: ${dialogAnonymous.a5}`, (answer) => {
//         if (answer === `a`) {
//             end()
//         } else if (answer === `b`) {
//             a7()
//         } else {
//             a5()
//         }
//     })
// }

// const a6 = () => {
//     readline.question(`Anonymous: ${dialogAnonymous.a6}`, (answer) => {
//         if (answer === `a`) {
//             end()
//         } else if (answer === `b`) {
//             a7()
//         } else {
//             a6()
//         }
//     })
// }

// const b4 = () => {
//     readline.question(`Anonymous: ${dialogAnonymous.b4}`, (answer) => {
//         if (answer === `a`) {
//             a5()
//         } else if (answer === `b`) {
//             a6()
//         } else {
//             b4()
//         }
//     })
// }

// const a4 = () => {
//     readline.question(`Anonymous: ${dialogAnonymous.a4}`, (answer) => {
//         if (answer === `a`) {
//             a5()
//         }
//         else if (answer === `b`) {
//             b4()
//         } else {
//             a4()
//         }
//     })
// }

// const a3 = () => {
//     readline.question(`Anonymous: ${dialogAnonymous.a3}`, (answer) => {
//         if (answer === `a`) {
//             a4()
//         } else if (answer === `b`) {
//             b4()
//         } else {
//             a3()
//         }
//     })
// }

// const a2 = () => {
//     readline.question(`Anonymous: ${dialogAnonymous.a2}`, (answer) => {
//         if (answer === `a`) {
//             a3()
//         } else if (answer === `b`) {
//             a4()
//         } else {
//             a2()
//         }
//     })
// }

// const b1 = () => {
//     readline.question(`Anonymous: ${dialogAnonymous.b1}`, (answer) => {
//         if (answer === `a`) {
//             a2()
//         } else {
//             b1()
//         }
//     })
// }

// const start = () => {
//     readline.question(`Anonymous: ${dialogAnonymous.a1}`, (answer) => {

//         if (answer === `a`) {
//             a2()
//         } else if (answer === `b`) {
//             b1()
//         } else {
//             console.log('Anonymous: What are you talking about?')
//             start()
//         }
//     })
// }

// start()



