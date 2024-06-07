/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qlt02nmm",
    "name": "sport",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qlt02nmm",
    "name": "sport",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Badminton",
        "Football",
        "Handball",
        "Salle de Sport",
        "Rugby"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
