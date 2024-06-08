/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Activite = "Activite",
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

export enum ActiviteSportOptions {
	"Badminton" = "Badminton",
	"Salle de sport" = "Salle de sport",
	"Football" = "Football",
	"Handball" = "Handball",
	"Natation" = "Natation",
	"Vélo" = "Vélo",
	"Randonnée" = "Randonnée",
	"Course à Pied" = "Course à Pied",
	"Tennis" = "Tennis",
	"Rugby" = "Rugby",
}

export enum ActiviteNIveauOptions {
	"Débutant" = "Débutant",
	"Intermédiaire" = "Intermédiaire",
	"Expert" = "Expert",
}
export type ActiviteRecord = {
	Auteur?: string
	Date?: IsoDateString
	Image?: string
	Lieu?: string
	NIveau?: ActiviteNIveauOptions
	Sport?: ActiviteSportOptions
	Titre?: string
}

export enum UsersSportOptions {
	"Badminton" = "Badminton",
	"Salle de sport" = "Salle de sport",
	"Football" = "Football",
	"Handball" = "Handball",
	"Natation" = "Natation",
	"Vélo" = "Vélo",
	"Randonnée" = "Randonnée",
	"Course à Pied" = "Course à Pied",
	"Tennis" = "Tennis",
	"Rugby" = "Rugby",
}
export type UsersRecord = {
	avatar?: string
	coach?: boolean
	date_naissance?: IsoDateString
	nom?: string
	prenom?: string
	sport?: UsersSportOptions[]
	telephone?: number
}

// Response types include system fields and match responses from the PocketBase API
export type ActiviteResponse<Texpand = unknown> = Required<ActiviteRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Activite: ActiviteRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Activite: ActiviteResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'Activite'): RecordService<ActiviteResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
