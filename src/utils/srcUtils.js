import data from '../config';

class Sources {
    constructor() {
        this.src = [];
    }

    get Source() {
        return this.src;
    }

    _fetchSource() {
        data.content.map((data) => this.src.push(data.src))
    }
}

export default Sources;