const database = 'FINAL_MBD';
const collection = 'SRYNADILA';

use(database);

db.createCollection(collection);

db[collection].updateOne(
    {title : "Laskar Pelangi"},
    {$set : {year : 2004}}
);

//db[collection].find();