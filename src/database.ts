import level from 'level-ts';

class Database {
    constructor(dbpath: string) {
        this.path = dbpath || './database';
    }
    path;
    initialized = false;
    db;

    initialize() {
        this.db = new level(this.path);
        this.initialized = true;
    }

    async save(params: {
        invoiceId: string,
        invoiceParams: object
    }) {
        const { invoiceId, invoiceParams } = params;
        await this.db.put(invoiceId, invoiceParams);
    }
}

export const database = new Database('./database');
database.initialize();