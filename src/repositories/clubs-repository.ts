import { ClubModel } from "../models/club-model"
import fs from "fs/promises"

const getClubs = async () => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8")
    const clubs: ClubModel[] = JSON.parse(data)
    return clubs
}

export const findAllClubs = async (): Promise<ClubModel[]> => {
    return await getClubs()
}

export const findClubById = async (id: number): Promise<ClubModel | undefined> => {
    const clubs = await getClubs()
    return clubs.find(club => club.id === id)
}

export const insertClub = async (club: ClubModel) => {
    const clubs = await getClubs()
    clubs.push({
        id: Number(club.id),
        name: club.name
    })
    await fs.writeFile("./src/data/clubs.json", JSON.stringify(clubs), "utf-8")
}

export const findAndModifyClub = async (id: number, club: ClubModel) => {
    const clubs = await getClubs()
    const index = clubs.findIndex(c => c.id === id)
    if (index !== -1) clubs[index] = {
        id: id,
        name: club.name
    }
    await fs.writeFile("./src/data/clubs.json", JSON.stringify(clubs), "utf-8")
    return clubs[index]
}