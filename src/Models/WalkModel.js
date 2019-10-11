import nanoid from 'nanoid'

class WalkModel {
    constructor(date, distance, id = nanoid(5)) {
        this.id = id;
        this.date = date;
        this.distance = distance;
    }
}

export default WalkModel