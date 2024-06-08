/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u0adbuq9f5j2gjd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nf7udcgc",
    "name": "Image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u0adbuq9f5j2gjd")

  // remove
  collection.schema.removeField("nf7udcgc")

  return dao.saveCollection(collection)
})
