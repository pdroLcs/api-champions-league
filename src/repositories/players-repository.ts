import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"
import fs from "fs/promises"

const getPlayers = async () => {
    const data = await fs.readFile("./src/data/players.json", "utf-8")
    const players: PlayerModel[] = JSON.parse(data)
    return players
}

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return await getPlayers()
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    const players = await getPlayers()
    return players.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
    const players = await getPlayers()
    players.push({
        ...player,
        id: Number(player.id)
    })
    await fs.writeFile("./src/data/players.json", JSON.stringify(players), "utf-8")
}

export const deleteOnePlayer = async (id: number) => {
    const players = await getPlayers()
    const index = players.findIndex(player => player.id === id)

    if (index !== -1) {
        players.splice(index, 1)
        await fs.writeFile("./src/data/players.json", JSON.stringify(players), "utf-8")
        return true
    } 
    return false
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel) => {
    const players = await getPlayers()
    const index = players.findIndex(player => player.id === id)
    if (index !== -1) {
        players[index].statistics = {
            ...players[index].statistics,
            ...statistics
        }
        await fs.writeFile("./src/data/players.json", JSON.stringify(players), "utf-8")
    }
    return players[index]
}