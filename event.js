const EventEmitter = require("events")
const emitter = new EventEmitter()

const value = true;
emitter.on(value, () => {
    console.log('AB de Villiers');
})

const getValue = () => {
    return true;
}

emitter.emit(getValue());
