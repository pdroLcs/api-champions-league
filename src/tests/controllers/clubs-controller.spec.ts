import { deleteClub, getClubById, getClubs, postClub, updateClub } from "../../controllers/clubs-controller"
import { createClubService, deleteClubService, getClubByIdService, getClubService, updateClubService } from "../../services/clubs-service"
import { mockRequest } from "../mocks/mockRequest"
import { mockResponse } from "../mocks/mockResponse"

jest.mock("../../services/clubs-service.ts")

describe("getClubs", () => {
    test("Should return clubs successfully with code 200", async () => {
        const req = mockRequest()
        const res = mockResponse()

        ;(getClubService as jest.Mock).mockResolvedValue({
            statusCode: 200,
            body: [
                { name: "Barcelona FC"},
                { name: "Real Madrid"}
            ]
        })

        await getClubs(req, res)
        expect(getClubService).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith([
            { name: "Barcelona FC"},
            { name: "Real Madrid"}
        ])
    })

    test("Should return no content with code 204", async () => {
        const req = mockRequest()
        const res = mockResponse()

        ;(getClubService as jest.Mock).mockResolvedValue({
            statusCode: 204,
            body: null
        })

        await getClubs(req, res)
        expect(getClubService).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(204)
        expect(res.json).toHaveBeenCalledWith(null)
    })
})

describe("getClubById", () => {
    test("Should return club with code 200", async () => {
        const req = mockRequest({params: {id: "1"}})
        const res = mockResponse()

        ;(getClubByIdService as jest.Mock).mockResolvedValue({
            statusCode: 200,
            body: {name: "Barcelona FC"}
        })

        await getClubById(req, res)
        expect(getClubByIdService).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith({name: "Barcelona FC"})
    })

    test("Should return null with code 204", async () => {
        const req = mockRequest({params: {id: "1"}})
        const res = mockResponse()

        ;(getClubByIdService as jest.Mock).mockResolvedValue({
            statusCode: 204,
            body: null
        })

        await getClubById(req, res)
        expect(getClubByIdService).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(204)
        expect(res.json).toHaveBeenCalledWith(null)
    })
})

describe("postClub", () => {
    test("Should creat club successfully with code 201", async () => {
        const req = mockRequest({
            body: {
                name: "Barcelona FC"
            }
        })
        const res = mockResponse()

        ;(createClubService as jest.Mock).mockResolvedValue({
            statusCode: 201,
            body: {
                name: "Barcelona FC"
            }
        })

        await postClub(req, res)
        expect(createClubService).toHaveBeenCalledTimes(1)
        expect(createClubService).toHaveBeenCalledWith({name: "Barcelona FC"})
        expect(res.status).toHaveBeenCalledWith(201)
        expect(res.json).toHaveBeenCalledWith({name: "Barcelona FC"})
    })

    test("Should return bad request with code 400", async () => {
        const req = mockRequest()
        const res = mockResponse()

        ;(createClubService as jest.Mock).mockResolvedValue({
            statusCode: 400,
            body: null
        })

        await postClub(req, res)
        expect(createClubService).toHaveBeenCalledTimes(1)
        expect(createClubService).toHaveBeenCalledWith({})
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith(null)
    })
})

describe("updateClub", () => {
    test("Should update club with code 200", async () => {
        const id = "1"
        const club = {name: "Barcelona FC"}

        const req = mockRequest({body: club, params: {id}})
        const res = mockResponse()

        ;(updateClubService as jest.Mock).mockResolvedValue({
            statusCode: 200,
            body: club
        })

        await updateClub(req, res)
        expect(updateClubService).toHaveBeenCalledTimes(1)
        expect(updateClubService).toHaveBeenCalledWith(parseInt(id), club)
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith(club)
    })

    test("Should return bad request with code 400", async () => {
        const id = "1"
        const club = {name: "Barcelona FC"}

        const req = mockRequest({body: club, params: {id}})
        const res = mockResponse()

        ;(updateClubService as jest.Mock).mockResolvedValue({
            statusCode: 400,
            body: null
        })

        await updateClub(req, res)
        expect(updateClubService).toHaveBeenCalledTimes(1)
        expect(updateClubService).toHaveBeenCalledWith(parseInt(id), club)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith(null)
    })
})

describe("deleteClub", () => {
    test("Should return ok with message 'deleted'", async () => {
        const id = "1"

        const req = mockRequest({params: {id}})
        const res = mockResponse()

        ;(deleteClubService as jest.Mock).mockResolvedValue({
            statusCode: 200,
            body: {
                message: "deleted"
            }
        })

        await deleteClub(req, res)
        expect(deleteClubService).toHaveBeenCalledTimes(1)
        expect(deleteClubService).toHaveBeenCalledWith(parseInt(id))
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith({message: "deleted"})
    })

    test("Should return no content with body null", async () => {
        const id = "1"

        const req = mockRequest({params: {id}})
        const res = mockResponse()

        ;(deleteClubService as jest.Mock).mockResolvedValue({
            statusCode: 204,
            body: null
        })

        await deleteClub(req, res)
        expect(deleteClubService).toHaveBeenCalledTimes(1)
        expect(deleteClubService).toHaveBeenCalledWith(parseInt(id))
        expect(res.status).toHaveBeenCalledWith(204)
        expect(res.json).toHaveBeenCalledWith(null)
    })
})