import express from "express";
import {
  fixtureByDate,
  fixtureBySeries,
  fixtureMatches,
  getAllSeries,
  results,
  scoreCard,
} from "../controllers/apiController.js";

const router = express.Router();

router.route("/series").get(getAllSeries);
router.route("/fixture").get(fixtureMatches);
router.route("/fixtureBySeries/:seriesId").get(fixtureBySeries);
router.route("/fixtureByDate/:date").get(fixtureByDate);
router.route("/results").get(results);
router.route("/scorecard/:matchId").get(scoreCard);

export { router as cricketApis };
