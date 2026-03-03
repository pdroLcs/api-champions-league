import { ClubModel } from "../models/club-model"
import { getDataFromJson, writeJsonFile } from "../utils/io-helper"

const clubJsonPath = "./src/data/clubs.json"

export const findAllClubs = async (): Promise<ClubModel[]> => {
    return await getDataFromJson(clubJsonPath)
}

export const findClubById = async (id: number): Promise<ClubModel | undefined> => {
    const clubs: ClubModel[] = await getDataFromJson(clubJsonPath)
    return clubs.find(club => club.id === id)
}

export const insertClub = async (club: ClubModel) => {
    const clubs = await getDataFromJson(clubJsonPath)
    clubs.push({
        id: Number(club.id),
        name: club.name
    })
    await writeJsonFile(clubJsonPath, clubs)
}

export const findAndModifyClub = async (id: number, club: ClubModel) => {
    const clubs: ClubModel[] = await getDataFromJson(clubJsonPath)
    const index = clubs.findIndex(c => c.id === id)
    if (index !== -1) clubs[index] = {
        id: id,
        name: club.name
    }
    await writeJsonFile(clubJsonPath, clubs)
    return clubs[index]
}

export const deleteClub = async (id: number) => {
    const clubs: ClubModel[] = await getDataFromJson(clubJsonPath)
    const index = clubs.findIndex(club => club.id === id)
    if (index !== -1) {
        clubs.splice(index, 1)
        await writeJsonFile(clubJsonPath, clubs)
        return true
    }
    return false
}