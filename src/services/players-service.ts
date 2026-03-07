import { Player } from "../../generated/prisma/client"
import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"
import { deleteOnePlayer, findAllPlayers, findAndModifyPlayer, findPlayerById, insertPlayer } from "../repositories/players-repository"
import { badRequest, created, noContent, ok } from "../utils/http-helper"

export const getPlayerService = async () => {
    const data = await findAllPlayers()
    let response = data ? await ok(data) : await noContent()
    return response
}

export const getPlayerByIdService = async (id: number) => {
    const data = await findPlayerById(id)
    let response = data ? await ok(data) : await noContent()
    return response
}

export const createPlayerService = async (player: Player) => {
    if (!player) return await badRequest()
    await insertPlayer(player)
    return await created(player)
}

export const deletePlayerService = async (id: number) => {
    const deleted = await deleteOnePlayer(id)
    const response = deleted ? await ok({message: "Deleted"}) : await badRequest()
    return response
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await findAndModifyPlayer(id, statistics)
    const response = data ? await ok(data) : await badRequest()
    return response
}