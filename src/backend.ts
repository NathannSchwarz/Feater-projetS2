import Pocketbase from 'pocketbase'
const pb = new Pocketbase('http://127.0.0.1:8090')

export async function updateProfile(userid: string, data: any) {
    await pb.collection('users').update(userid, data)
}
