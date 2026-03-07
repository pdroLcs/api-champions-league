import { prisma } from "../lib/prisma"

export const findAllPlayers = async () => {
    return await prisma.player.findMany({include: {statistics: true, club: true}})
}

export const findPlayerById = async (id: number) => {
    const player = await prisma.player.findUnique({where: {id}, include: {statistics: true}})
    return player
}

export const insertPlayer = async (data: any) => {
    const { statistics, ...playerData } = data
    await prisma.player.create({
        data: {
            ...playerData,
            statistics: {
                create: statistics
            }
        },
        include: {statistics: true}
    })
}

export const deleteOnePlayer = async (id: number) => {
    try {
        const deleted = await prisma.player.delete({where: {id}, include: {statistics: true}})
        return deleted
    } catch (err) {
        return null
    }
}

export const findAndModifyPlayer = async (id: number, statistics: any) => {
    try {
       const updated = await prisma.statistics.update({
        data: statistics,
        where: {playerId: id}
       })
       return updated
    } catch (error) {
        return null
    }
}