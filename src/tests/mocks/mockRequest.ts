import { Request } from "express"

type MockRequestData<P = any, B = any, Q = any> = {
    body?: B
    params?: P
    query?: Q
}

export const mockRequest = <P = any, B = any, Q = any>({
    body = {} as B,
    params = {} as P,
    query = {} as Q
}: MockRequestData<P, B, Q> = {}) => {
    return {
        body,
        params,
        query
    } as Request<P, any, B, Q>
}