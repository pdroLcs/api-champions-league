import { Request } from "express";

type MockRequestData = {
    body?: any,
    params?: any,
    query?: any
}

export const mockRequest = ({body = {}, params = {}, query = {}}: MockRequestData = {}) => {
    return {
        body,
        params,
        query
    } as Request
}