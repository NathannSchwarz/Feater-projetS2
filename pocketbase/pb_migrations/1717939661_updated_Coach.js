/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrozlj6qpptz8ea")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xcmhzmci",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrozlj6qpptz8ea")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xcmhzmci",
    "name": "Sport",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "oui"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
