/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrozlj6qpptz8ea")

  // remove
  collection.schema.removeField("yrytmvar")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ltgackyq",
    "name": "Abonnement",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Aucun",
        "Standard",
        "Premium"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrozlj6qpptz8ea")

  // add
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

  // remove
  collection.schema.removeField("ltgackyq")

  return dao.saveCollection(collection)
})
