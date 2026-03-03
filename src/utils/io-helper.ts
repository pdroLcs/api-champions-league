import fs from "fs/promises"

export const writeJsonFile = async <T>(pathName: string, data: T[]) => {
    await fs.writeFile(pathName, JSON.stringify(data), "utf-8") 
}

export const getDataFromJson = async <T>(pathName: string): Promise<T[]> => {
    const jsonData = await fs.readFile(pathName, "utf-8")
    const data = JSON.parse(jsonData)
    return data
}