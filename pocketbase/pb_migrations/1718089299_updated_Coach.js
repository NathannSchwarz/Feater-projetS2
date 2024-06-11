/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrozlj6qpptz8ea")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dodrdptm",
    "name": "Experience",
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

  // remove
  collection.schema.removeField("dodrdptm")

  return dao.saveCollection(collection)
})
