/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hrozlj6qpptz8ea")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7kiq8rp5",
    "name": "Specialite",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "Intensité",
        "Stratégie de jeu",
        "Technique de jeu",
        "Perte de poids",
        "Gain de masse musculaire",
        "Remise en forme",
        "Rééducation",
        "post-blessure",
        "Préparation aux compétitions",
        "Entraînement pour débutants",
        "Amélioration de l'endurance",
        "Renforcement musculaire",
        "Flexibilité et mobilité",
        "Entraînement en intervalle de haute intensité (HIIT)",
        "Entraînement de force Cardio-training",
        "Entraînement fonctionnel Coaching en nutrition",
        "Gestion du stress",
        "Amélioration de la posture",
        "Réhabilitation physique",
        "Entraînement personnalisé",
        "Préparation mentale",
        "Coaching motivationnel",
        "Techniques de respiration",
        "Entraînement pour la mobilité articulaire",
        "Planification de programmes d'entraînement",
        "Stratégies d'entraînement personnalisées"
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
    "id": "7kiq8rp5",
    "name": "Specialite",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "Intensité",
        "Stratégie de jeu",
        "Technique de jeu"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
