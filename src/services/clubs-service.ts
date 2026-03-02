import { ClubModel } from "../models/club-model"
import { deleteClub, findAllClubs, findAndModifyClub, findClubById, insertClub } from "../repositories/clubs-repository"
import { badRequest, created, noContent, ok } from "../utils/http-helper"

export const getClubService = async () => {
    const data = await findAllClubs()
    const response = data ? await ok(data) : await noContent()
    return response
}

export const getClubByIdService = async (id: number) => {
    const data = await findClubById(id)
    const response = data ? await ok(data) : await noContent()
    return response
}

export const createClubService = async (club: ClubModel) => {
    if (!club) return await badRequest()
    await insertClub(club)
    return await created()
}

export const updateClubService = async (id: number, club: ClubModel) => {
    const data = await findAndModifyClub(id, club)
    const response = data ? await ok(data) : await badRequest()
    return response
}

export const deleteClubService = async (id: number) => {
    const data = await deleteClub(id)
    const response = data ? await ok({message: "deleted"}) : await noContent()
    return response
}