import { prisma } from "../lib/prisma"
import { ClubModel } from "../models/club-model"

export const findAllClubs = async () => {
    return await prisma.club.findMany({include: {player: {include: {statistics: true}}}})
}

export const findClubById = async (id: number) => {
    const club = await prisma.club.findFirst({include: {player: {include: {statistics: true}}}, where: {id}})
    return club
}

export const insertClub = async (club: ClubModel) => {
    await prisma.club.create({
        data: club
    })
}

export const findAndModifyClub = async (id: number, club: ClubModel) => {
    try {
        const updated = await prisma.club.update({
            data: club,
            where: {id}
        })
        return updated
    } catch (err) {
        return null
    }
}

export const deleteClub = async (id: number) => {
    try {
        const deleted = await prisma.club.delete({where: {id}, include: {player: true}})
        return deleted
    } catch (error) {
        return null
    }
}