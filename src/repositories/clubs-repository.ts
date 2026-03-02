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