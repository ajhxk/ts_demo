
const { exec } = require('child_process')
const args = process.argv.splice(2);

const path = args[0]

const tsNode = () => {
    const CMD = `ts-node ${path}`
    // const CMD = `node -v`
    console.log(CMD)
    exec(CMD, function (error, stdout, stderr) {
        if (error) {
            console.log(error.message);
            console.log(stderr)
        } else {
            console.log(`执行结果:
    ${stdout}`)
        }
    });
}

tsNode()