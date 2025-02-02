const Events = require("events")

class Logger extends Events {
    log(a, b) {
        this.emit("canculate", a + b)
    }
}

const logger = new Logger()
logger.on("canculate", data=>{
    console.log(data)
})

logger.log(12, 12)