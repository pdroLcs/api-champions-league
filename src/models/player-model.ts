import { StatisticsModel } from "./statistics-model";

export interface PlayerModel {
    id: number,
    name: string,
    nationality: string,
    position: string,
    clubId: number,
    statistics: StatisticsModel,
    club: string,
}