import level from 'level-ts';
class Database {
    constructor(dbpath: string) {
        this.path = dbpath || './database';
    }
    path;
    initialized = false;
    db: any;

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

    async get(params: any) {
        const { invoiceId } = params;
        const invoice = await this.db.get(invoiceId);
        return invoice;
    }
}

export const database = new Database('./database');
database.initialize();