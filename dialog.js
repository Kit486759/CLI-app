// Set up os module to get machine info
const os = require('os');
const memory = Math.round(os.freemem() / 1024 / 1024)
const totMemory = Math.round(os.totalmem() / 1024 / 1024)

exports.dialog = {
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

exports.endingDialog = {
    a1: `\n\n(You land on the trash, you feel a lot of pain...)`,
    a2: `Someone: Wake up...`,
    a3: `(You wake up in a smelly dirty room)`,
    a4: `Someone: Wellcome to the real world...`,
    a5: `Oh my god, what have I done.\n\n\n`,
    b1: `\n\nBAM... You can barely feel any pain... (******sound of alarm*******  You wake up at morning, it\'s just a dream.)\n\n\n`,
    b2: `\n\n(******sound of alarm*******  You wake up at morning, it\'s just a dream.)\n\n\n`
}