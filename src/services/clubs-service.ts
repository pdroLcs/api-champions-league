import { ClubModel } from "../models/club-model"
import { findAllClubs, findClubById, insertClub } from "../repositories/clubs-repository"
import { badRequest, created, noContent, ok } from "../utils/http-helper"

export const getClubService = async () => {
    const data = await findAllClubs()
    const response = ok(data)
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