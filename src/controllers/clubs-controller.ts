import { Request, Response } from "express";
import { createClubService, deleteClubService, getClubByIdService, getClubService, updateClubService } from "../services/clubs-service";

export const getClubs = async (req: Request, res: Response) => {
    const response = await getClubService()
    res.status(response.statusCode).json(response.body)
}

export const getClubById = async (req: Request<{id: string}>, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await getClubByIdService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postClub = async (req: Request, res: Response) => {
    const bodyValue = req.body
    const httpResponse = await createClubService(bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updateClub = async (req: Request<{id: string}>, res: Response) => {
    const id = parseInt(req.params.id)
    const bodyValue = req.body
    const httpResponse = await updateClubService(id, bodyValue)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const deleteClub = async (req: Request<{id: string}>, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await deleteClubService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
}