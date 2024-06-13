/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Activite = "Activite",
	Coach = "Coach",
	Groupe = "Groupe",
	Sport = "Sport",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum ActiviteNiveauOptions {
	"Débutant" = "Débutant",
	"Intermédiaire" = "Intermédiaire",
	"Expert" = "Expert",
}

export enum ActiviteRyhtmeOptions {
	"Cardio" = "Cardio",
	"Intensif" = "Intensif",
	"Rythmé" = "Rythmé",
	"Endurant" = "Endurant",
}
export type ActiviteRecord = {
	Adresse?: string
	Date?: IsoDateString
	Description?: string
	Image?: string
	Niveau?: ActiviteNiveauOptions
	Nom?: string
	Ryhtme?: ActiviteRyhtmeOptions[]
	Sport?: RecordIdString
	Users?: RecordIdString
}

export enum CoachSpecialiteOptions {
	"Intensité" = "Intensité",
	"Stratégie de jeu" = "Stratégie de jeu",
	"Technique de jeu" = "Technique de jeu",
	"Perte de poids" = "Perte de poids",
	"Gain de masse musculaire" = "Gain de masse musculaire",
	"Remise en forme" = "Remise en forme",
	"Rééducation" = "Rééducation",
	"post-blessure" = "post-blessure",
	"Préparation aux compétitions" = "Préparation aux compétitions",
	"Entraînement pour débutants" = "Entraînement pour débutants",
	"Amélioration de l'endurance" = "Amélioration de l'endurance",
	"Renforcement musculaire" = "Renforcement musculaire",
	"Flexibilité et mobilité" = "Flexibilité et mobilité",
	"Entraînement en intervalle de haute intensité (HIIT)" = "Entraînement en intervalle de haute intensité (HIIT)",
	"Entraînement de force Cardio-training" = "Entraînement de force Cardio-training",
	"Entraînement fonctionnel Coaching en nutrition" = "Entraînement fonctionnel Coaching en nutrition",
	"Gestion du stress" = "Gestion du stress",
	"Amélioration de la posture" = "Amélioration de la posture",
	"Réhabilitation physique" = "Réhabilitation physique",
	"Entraînement personnalisé" = "Entraînement personnalisé",
	"Préparation mentale" = "Préparation mentale",
	"Coaching motivationnel" = "Coaching motivationnel",
	"Techniques de respiration" = "Techniques de respiration",
	"Entraînement pour la mobilité articulaire" = "Entraînement pour la mobilité articulaire",
	"Planification de programmes d'entraînement" = "Planification de programmes d'entraînement",
	"Stratégies d'entraînement personnalisées" = "Stratégies d'entraînement personnalisées",
}

export enum CoachAbonnementOptions {
	"Aucun" = "Aucun",
	"Standard" = "Standard",
	"Premium" = "Premium",
}
export type CoachRecord = {
	Abonnement?: CoachAbonnementOptions
	Date_naissance?: IsoDateString
	Description?: string
	Documents?: string
	Email?: string
	Experience?: string
	Image?: string
	Nom?: string
	Numero?: string
	Prenom?: string
	Specialite?: CoachSpecialiteOptions[]
	Sport?: RecordIdString
}

export type GroupeRecord = {
	Image?: string
	Nom?: string
	Sport?: RecordIdString
}

export type SportRecord = {
	Image?: string
	Nom?: string
}

export enum UsersAbonnementOptions {
	"Aucun" = "Aucun",
	"Standard" = "Standard",
	"Premium" = "Premium",
}
export type UsersRecord = {
	Abonnement?: UsersAbonnementOptions
	Date_naissance?: IsoDateString
	Description?: string
	Nom?: string
	Numero?: number
	Personnalite?: string
	Prenom?: string
	Sport?: RecordIdString[]
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ActiviteResponse<Texpand = unknown> = Required<ActiviteRecord> & BaseSystemFields<Texpand>
export type CoachResponse<Texpand = unknown> = Required<CoachRecord> & BaseSystemFields<Texpand>
export type GroupeResponse<Texpand = unknown> = Required<GroupeRecord> & BaseSystemFields<Texpand>
export type SportResponse<Texpand = unknown> = Required<SportRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Activite: ActiviteRecord
	Coach: CoachRecord
	Groupe: GroupeRecord
	Sport: SportRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Activite: ActiviteResponse
	Coach: CoachResponse
	Groupe: GroupeResponse
	Sport: SportResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Activite'): RecordService<ActiviteResponse>
	collection(idOrName: 'Coach'): RecordService<CoachResponse>
	collection(idOrName: 'Groupe'): RecordService<GroupeResponse>
	collection(idOrName: 'Sport'): RecordService<SportResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
