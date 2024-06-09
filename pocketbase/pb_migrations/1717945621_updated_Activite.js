/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u0adbuq9f5j2gjd")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bg0adaa4",
    "name": "Ryhtme",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Cardio",
        "Intensif",
        "Rythmé",
        "Endurant"
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
    "id": "bg0adaa4",
    "name": "Ryhtme",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Cardio",
        "Intensif",
        "Ryhtmé"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
