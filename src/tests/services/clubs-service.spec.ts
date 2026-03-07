import { ClubModel } from "../../../generated/prisma/models"
import { deleteClub, findAllClubs, findAndModifyClub, findClubById, insertClub } from "../../repositories/clubs-repository"
import { createClubService, deleteClubService, getClubByIdService, getClubService, updateClubService } from "../../services/clubs-service"

jest.mock("../../repositories/clubs-repository.ts")

describe("getClubService", () => {
    test("Should return all clubs if exists at least one", async () => {
        const clubs = [
            {id: 1, name: "Barcelona FC"},
            {id: 2, name: "Real Madrid"}
        ]

        ;(findAllClubs as jest.Mock).mockResolvedValue(clubs)

        const response = await getClubService()

        expect(findAllClubs).toHaveBeenCalledTimes(1)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(clubs)
    })

    test("Should return null when exists no clubs", async () => {
        ;(findAllClubs as jest.Mock).mockResolvedValue(null)

        const response = await getClubService()

        expect(findAllClubs).toHaveBeenCalledTimes(1)
        expect(response.statusCode).toBe(204)
        expect(response.body).toBeNull()
    })
})

describe("getClubByIdService", () => {
    test("Should return club when club exists", async () => {
        const club = {
            id: 1,
            name: "Barcelona FC"
        }

        ;(findClubById as jest.Mock).mockResolvedValue(club)

        const response = await getClubByIdService(1)

        expect(findClubById).toHaveBeenCalledTimes(1)
        expect(findClubById).toHaveBeenCalledWith(1)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(club)
    })

    test("Should return no content when club doesn't exists", async () => {
        (findClubById as jest.Mock).mockResolvedValue(null)

        const response = await getClubByIdService(1)

        expect(findClubById).toHaveBeenCalledTimes(1)
        expect(findClubById).toHaveBeenCalledWith(1)
        expect(response.statusCode).toBe(204)
        expect(response.body).toBeNull()
    })
})

describe("createClubService", () => {
    test("Create a club when the data is valid", async () => {

        const club = {
            name: "Barcelona FC"
        } as ClubModel

        const response = await createClubService(club)

        expect(insertClub).toHaveBeenCalledTimes(1)
        expect(insertClub).toHaveBeenCalledWith(club)
        expect(response.statusCode).toBe(201)
        expect(response.body).toEqual({
            message: "Successful",
            data: club
        })
    })

    test("Should return bad request when data is not valid", async () => {
        const response = await createClubService(null)

        expect(insertClub).toHaveBeenCalledTimes(0)
        expect(response.statusCode).toBe(400)
        expect(response.body).toBeNull()
    })
})

describe("updateClubService", () => {
    test("Should update a club when the data is valid and exists club with the id", async () => {
        const id = 1
        const update = {name: "Real Madrid"} as ClubModel

        ;(findAndModifyClub as jest.Mock).mockResolvedValue(update)
        const response = await updateClubService(id, update)

        expect(findAndModifyClub).toHaveBeenCalledTimes(1)
        expect(findAndModifyClub).toHaveBeenCalledWith(id, update)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(update)
    })

    test("Should return bad request when the data is invalid or club with id not exists", async () => {
        const id = 1
        const club = {name: "Barcelona FC"} as ClubModel

        (findAndModifyClub as jest.Mock).mockResolvedValue(null)
        const response = await updateClubService(id, club)

        expect(findAndModifyClub).toHaveBeenCalledTimes(1)
        expect(findAndModifyClub).toHaveBeenCalledWith(id, club)
        expect(response.statusCode).toBe(400)
        expect(response.body).toBe(null)
    })
})

describe("deleteClubService", () => {
    test("Should return deleted when exists club with id", async () => {
        const id = 1
        const club = {
            id: id,
            name: "Barcelona FC"
        } as ClubModel

        ;(deleteClub as jest.Mock).mockResolvedValue(club)

        const response = await deleteClubService(id)

        expect(deleteClub).toHaveBeenCalledTimes(1)
        expect(deleteClub).toHaveBeenCalledWith(id)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
            message: "deleted"
        })
    })

    test("Should return no content when exists no club with id", async () => {
        const id = 1

        ;(deleteClub as jest.Mock).mockResolvedValue(null)

        const response = await deleteClubService(id)

        expect(deleteClub).toHaveBeenCalledTimes(1)
        expect(deleteClub).toHaveBeenCalledWith(id)
        expect(response.statusCode).toBe(204)
        expect(response.body).toBeNull()
    })
})