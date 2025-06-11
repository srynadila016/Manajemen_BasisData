const database = 'FINAL_MBD';
const collection = 'SRYNADILA';

use(database);

db.createCollection(collection);

db[collection].aggregate([
    {
        $group: {
            _id: "$kategori",
            totalyear: {$sum: "$year"},
            ratayear: {$avg: "$year"}
        }
    }
]);