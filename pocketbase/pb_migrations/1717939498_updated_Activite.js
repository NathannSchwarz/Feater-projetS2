/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u0adbuq9f5j2gjd")

  // remove
  collection.schema.removeField("8jbklzl3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0hiqa40z",
    "name": "Date_debut",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bgyn0mho",
    "name": "Nom",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8jbklzl3",
    "name": "Auteur",
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
  collection.schema.removeField("0hiqa40z")

  // remove
  collection.schema.removeField("bg0adaa4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bgyn0mho",
    "name": "Titre",
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
