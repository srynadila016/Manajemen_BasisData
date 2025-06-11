const database = 'FINAL_MBD';
const collection = 'SRYNADILA';

use(database);

db.createCollection(collection);

db[collection].find();
db[collection].find({
  title : "Laskar Pelangi"
});