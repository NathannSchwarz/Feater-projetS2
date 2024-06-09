/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrozlj6qpptz8ea")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yrytmvar",
    "name": "Abonnement",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrozlj6qpptz8ea")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yrytmvar",
    "name": "Abonnemet",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
