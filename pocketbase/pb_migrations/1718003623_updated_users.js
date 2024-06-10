/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("qlt02nmm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vohquist",
    "name": "Sport",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "49bj2cbnnbvd822",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qlt02nmm",
    "name": "Sport",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
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
  collection.schema.removeField("vohquist")

  return dao.saveCollection(collection)
})
