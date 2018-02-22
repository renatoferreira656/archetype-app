

class Location {

    constructor() {
        this.event = {};
    }

    addListener(key, fnc) {
        this.event[key] = fnc;
    }

    call(key, prop) {
        this.event[key](prop);
    }

}

export default new Location();