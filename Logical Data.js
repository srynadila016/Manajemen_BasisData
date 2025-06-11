const database = 'FINAL_MBD';
const collection = 'SRYNADILA';

use(database);

db.createCollection(collection);

db[collection].find({
    $or : [
        {year : {$gt : 2005}}
    ]
});