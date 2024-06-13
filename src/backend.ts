import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase('https://feater.schwarznathan.fr:443') as TypedPocketBase

export async function updateProfile(userid: string, data: any) {
    await pb.collection('users').update(userid, data)
}


export async function allSport() {
  const records = await pb.collection('Sport').getFullList()
  return records
}

export async function allActivite() {
  const records = await pb.collection('Activite').getFullList()
  return records
}


export async function allGroupe() {
  const records = await pb.collection('Groupe').getFullList()
  return records
}

export async function allMessage() {
  const records = await pb.collection('users').getFullList()
  return records
}


export async function allCoach() {
  const records = await pb.collection('Coach').getFullList({
    expand: 'Sport'
  })
  return records
}


export async function IDusers(id: string) {
  const record = await pb.collection('activite').getOne(id)
  return record
}