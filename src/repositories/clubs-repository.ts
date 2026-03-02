import { ClubModel } from "../models/club-model"
import fs from "fs/promises"

const getClubs = async () => {
    return await fs.readFile("./src/data/clubs.json", "utf-8")
}

export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = await getClubs()
    const clubs: ClubModel[] = JSON.parse(data)
    return clubs
}

export const findClubById = async (id: number): Promise<ClubModel | undefined> => {
    const data = await getClubs()
    const clubs: ClubModel[] = JSON.parse(data)
    return clubs.find(club => club.id === id)
}