import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"
import { getDataFromJson, writeJsonFile } from "../utils/io-helper"

const playersJsonPath = "./src/data/players.json"

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return await getDataFromJson(playersJsonPath)
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    const players: PlayerModel[] = await getDataFromJson(playersJsonPath)
    return players.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
    const players = await getDataFromJson(playersJsonPath)
    players.push({
        ...player,
        id: Number(player.id)
    })
    await writeJsonFile(playersJsonPath, players)
}

export const deleteOnePlayer = async (id: number) => {
    const players: PlayerModel[] = await getDataFromJson(playersJsonPath)
    const index = players.findIndex(player => player.id === id)

    if (index !== -1) {
        players.splice(index, 1)
        await writeJsonFile(playersJsonPath, players)
        return true
    } 
    return false
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel) => {
    const players: PlayerModel[] = await getDataFromJson(playersJsonPath)
    const index = players.findIndex(player => player.id === id)
    if (index !== -1) {
        players[index].statistics = {
            ...players[index].statistics,
            ...statistics
        }
        await writeJsonFile(playersJsonPath, players)
    }
    return players[index]
}