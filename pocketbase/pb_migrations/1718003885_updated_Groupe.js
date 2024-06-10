/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t6sl0mxpsbarpzu")

  // remove
  collection.schema.removeField("gnr7lvtn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oohovhns",
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
  const collection = dao.findCollectionByNameOrId("t6sl0mxpsbarpzu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gnr7lvtn",
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
  collection.schema.removeField("oohovhns")

  return dao.saveCollection(collection)
})
