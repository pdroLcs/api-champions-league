import { Request, Response } from "express";
import { getClubByIdService, getClubService } from "../services/clubs-service";

export const getClubs = async (req: Request, res: Response) => {
    const response = await getClubService()
    res.status(response.statusCode).json(response.body)
}

export const getClubById = async (req: Request<{id: string}>, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await getClubByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}