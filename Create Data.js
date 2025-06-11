
const database = 'FINAL_MBD';
const collection = 'SRYNADILA';

use(database);

db.createCollection(collection);

db[collection].insertMany([
    {title : "Laskar Pelangi", author : "Andrea Hirata", year : 2005, genre : "Fiksi"},
    {title : "Atomic Habits", author : "James Clear", year : 2018, genre : "Pengembangan Diri"},
    {title : "Negeri 5 Menara", author : "Ahmad Faudi", year : 2009, genre : "Fiksi"}
]);

db[collection].find();
