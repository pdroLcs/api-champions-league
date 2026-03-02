import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerById, postPlayer, updatePlayer } from "../controllers/players-controller";
import { getClubById, getClubs } from "../controllers/clubs-controller";

export const router = Router()

//Players
router.get("/players", getPlayer)
router.get("/players/:id", getPlayerById)

router.post("/players", postPlayer)

router.patch("/players/:id", updatePlayer)

router.delete("/players/:id", deletePlayer)


//Clubs
router.get("/clubs", getClubs)
router.get("/clubs/:id", getClubById)