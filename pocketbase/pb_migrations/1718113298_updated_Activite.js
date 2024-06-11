/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u0adbuq9f5j2gjd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ivgcfunp",
    "name": "Description",
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
  const collection = dao.findCollectionByNameOrId("u0adbuq9f5j2gjd")

  // remove
  collection.schema.removeField("ivgcfunp")

  return dao.saveCollection(collection)
})
