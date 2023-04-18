import level from 'level-ts';

class Database {
    constructor(dbpath: string) {
        this.path = dbpath || './database';
    }
    path;
    initialized = false;

    initialize() {
        const database = new level(this.path);
        this.initialized = true;
    }
}