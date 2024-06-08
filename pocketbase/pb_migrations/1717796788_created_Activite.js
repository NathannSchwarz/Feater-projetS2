/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "u0adbuq9f5j2gjd",
    "created": "2024-06-07 21:46:28.922Z",
    "updated": "2024-06-07 21:46:28.922Z",
    "name": "Activite",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "dapfsjvg",
        "name": "Lieu",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
            "Football"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("u0adbuq9f5j2gjd");

  return dao.deleteCollection(collection);
})
