const database = 'FINAL_MBD';
const collection = 'SRYNADILA';

use(database);

db.createCollection(collection);

db[collection].bulkWrite([
    {
        insertOne: {
            document : {title : "Laskar Pelangi", author : "Andrea Hirata", year : 2005, genre : "Fiksi", publisher : "Bentang Pustaka"}
        }
    },
    {
        updateOne: {
            filter : {title : "Atomic Habits"},
            update :{$set : {year : 2012}}
        }
    },
    {
        deleteOne: {
            filter : {title : "Negeri 5 Menara" }
        }
    }
    
]);


