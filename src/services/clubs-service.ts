import { findAllClubs, findClubById } from "../repositories/clubs-repository"
import { noContent, ok } from "../utils/http-helper"

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