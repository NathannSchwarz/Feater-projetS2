import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase

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
