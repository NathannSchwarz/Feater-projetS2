/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u0adbuq9f5j2gjd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3kg03ngw",
    "name": "Niveau",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Débutant",
        "Intermédiaire",
        "Expert"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u0adbuq9f5j2gjd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3kg03ngw",
    "name": "NIveau",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Débutant",
        "Intermédiaire",
        "Expert"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
