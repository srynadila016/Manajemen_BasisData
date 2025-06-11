const database = 'FINAL_MBD';
const collection = 'validasi';

use(database);

db.createCollection(collection, {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "author", "year", "genre", "publisher"],
      properties: {
        title: {
          bsonType: "string",
          description: "Harus berupa string (judul buku)"
        },
        author: {
          bsonType: "string",
          description: "Harus berupa string (nama penulis)"
        },
        year: {
          bsonType: "int",
          minimum: 0,
          description: "Harus berupa bilangan bulat positif (tahun terbit)"
        },
        genre: {
          bsonType: "string",
          description: "Harus berupa string (genre buku)"
        },
        publisher: {
          bsonType: "string",
          description: "Harus berupa string (nama penerbit)"
        }
      }
    }
  },
});
