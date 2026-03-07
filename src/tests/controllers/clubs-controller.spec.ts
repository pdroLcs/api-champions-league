import { getClubs, postClub } from "../../controllers/clubs-controller"
import { createClubService, getClubService } from "../../services/clubs-service"
import { mockRequest } from "../mocks/mockRequest"
import { mockResponse } from "../mocks/mockResponse"

jest.mock("../../services/clubs-service.ts")

describe("Clubs Controller", () => {
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
})