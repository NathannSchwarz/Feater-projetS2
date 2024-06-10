/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "49bj2cbnnbvd822",
    "created": "2024-06-10 06:30:44.422Z",
    "updated": "2024-06-10 06:30:44.422Z",
    "name": "Sport",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a8gszni3",
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
      },
      {
        "system": false,
        "id": "yfqvibet",
        "name": "Image",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
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
  const collection = dao.findCollectionByNameOrId("49bj2cbnnbvd822");

  return dao.deleteCollection(collection);
})
