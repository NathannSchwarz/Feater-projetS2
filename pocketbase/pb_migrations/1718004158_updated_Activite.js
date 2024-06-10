/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u0adbuq9f5j2gjd")

  // remove
  collection.schema.removeField("kwvm0how")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tnehu5rg",
    "name": "Sport",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "49bj2cbnnbvd822",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u0adbuq9f5j2gjd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kwvm0how",
    "name": "Sport",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Badminton",
        "Salle de sport",
        "Football",
        "Handball",
        "Natation",
        "Vélo",
        "Randonnée",
        "Course à Pied",
        "Tennis",
        "Rugby"
      ]
    }
  }))

  // remove
  collection.schema.removeField("tnehu5rg")

  return dao.saveCollection(collection)
})
