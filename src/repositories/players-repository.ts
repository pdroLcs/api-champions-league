import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 75,
            Shooting: 86,
            Passing: 92,
            Dribbling: 83,
            Defending: 64,
            Physical: 78
        }
    },
    {
        id: 2,
        name: "Neymar Jr",
        club: "Paris Saint-Germain",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 91,
            Shooting: 85,
            Passing: 87,
            Dribbling: 94,
            Defending: 32,
            Physical: 68
        }
    },
    {
        id: 3,
        name: "Kylian Mbappé",
        club: "Real Madrid",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 97,
            Shooting: 89,
            Passing: 80,
            Dribbling: 92,
            Defending: 36,
            Physical: 78
        }
    },
    {
        id: 4,
        name: "Robert Lewandowski",
        club: "Barcelona",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 76,
            Shooting: 92,
            Passing: 85,
            Dribbling: 87,
            Defending: 43,
            Physical: 84
        }
    },
    {
        id: 5,
        name: "Vinicius Jr",
        club: "Real Madrid",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 96,
            Shooting: 86,
            Passing: 82,
            Dribbling: 93,
            Defending: 35,
            Physical: 76
        }
    },
    {
        id: 6,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Norway",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 93,
            Shooting: 92,
            Passing: 68,
            Dribbling: 80,
            Defending: 41,
            Physical: 88
        }
    },
    {
        id: 7,
        name: "Jamal Musiala",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 92,
            Shooting: 82,
            Passing: 86,
            Dribbling: 93,
            Defending: 61,
            Physical: 72
        }
    },
    {
        id: 8,
        name: "Jude Bellingham",
        club: "Real Madrid",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 86,
            Pace: 87,
            Shooting: 79,
            Passing: 84,
            Dribbling: 84,
            Defending: 79,
            Physical: 83
        }
    },
    {
        id: 9,
        name: "Phil Foden",
        club: "Manchester City",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 86,
            Shooting: 83,
            Passing: 87,
            Dribbling: 90,
            Defending: 71,
            Physical: 76
        }
    },
    {
        id: 10,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 90,
            Shooting: 89,
            Passing: 81,
            Dribbling: 90,
            Defending: 45,
            Physical: 75
        }
    },
    {
        id: 11,
        name: "Florian Wirtz",
        club: "Bayer Leverkusen",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 91,
            Shooting: 81,
            Passing: 85,
            Dribbling: 92,
            Defending: 62,
            Physical: 73
        }
    },
    {
        id: 12,
        name: "Harry Kane",
        club: "Bayern Munich",
        nationality: "England",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 79,
            Shooting: 91,
            Passing: 88,
            Dribbling: 83,
            Defending: 42,
            Physical: 81
        }
    },
    {
        id: 13,
        name: "Pedri",
        club: "Barcelona",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            Overall: 86,
            Pace: 78,
            Shooting: 76,
            Passing: 91,
            Dribbling: 88,
            Defending: 71,
            Physical: 68
        }
    },
    {
        id: 14,
        name: "Gavi",
        club: "Barcelona",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            Overall: 85,
            Pace: 84,
            Shooting: 71,
            Passing: 88,
            Dribbling: 87,
            Defending: 72,
            Physical: 67
        }
    },
    {
        id: 15,
        name: "Rodri",
        club: "Manchester City",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 72,
            Shooting: 67,
            Passing: 88,
            Dribbling: 76,
            Defending: 90,
            Physical: 82
        }
    },
    {
        id: 16,
        name: "Bukayo Saka",
        club: "Arsenal",
        nationality: "England",
        position: "Forward",
        statistics: {
            Overall: 86,
            Pace: 89,
            Shooting: 81,
            Passing: 80,
            Dribbling: 88,
            Defending: 67,
            Physical: 74
        }
    },
    {
        id: 17,
        name: "Luka Modrić",
        club: "Real Madrid",
        nationality: "Croatia",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 75,
            Shooting: 79,
            Passing: 91,
            Dribbling: 88,
            Defending: 72,
            Physical: 65
        }
    },
    {
        id: 18,
        name: "Toni Kroos",
        club: "Real Madrid",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 60,
            Shooting: 82,
            Passing: 92,
            Dribbling: 74,
            Defending: 70,
            Physical: 72
        }
    },
    {
        id: 19,
        name: "Federico Valverde",
        club: "Real Madrid",
        nationality: "Uruguay",
        position: "Midfielder",
        statistics: {
            Overall: 86,
            Pace: 85,
            Shooting: 79,
            Passing: 82,
            Dribbling: 84,
            Defending: 80,
            Physical: 81
        }
    },
    {
        id: 20,
        name: "Eduardo Camavinga",
        club: "Real Madrid",
        nationality: "France",
        position: "Midfielder",
        statistics: {
            Overall: 84,
            Pace: 89,
            Shooting: 72,
            Passing: 79,
            Dribbling: 81,
            Defending: 81,
            Physical: 80
        }
    }
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id)

    if (index !== -1) {
        database.splice(index, 1)
        return true
    } 
    return false
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel) => {
    const index = database.findIndex(player => player.id === id)
    if (index !== -1) {
        database[index].statistics = statistics
    }
    return database[index]
}