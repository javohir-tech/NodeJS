const myFunction = () => {
    const response = [];
    for (let i = 2; i < process.argv.length; i++) {
        const arg = process.argv[i].split("=")
        response[arg[0]] = arg[1] ? arg[1] : true
    }
    return response
}

console.log(myFunction())