const database = 'FINAL_MBD';
const collection = 'SRYNADILA';

use(database);

db.createCollection(collection);

db[collection].deleteOne({title : "Laskar Pelangi"})