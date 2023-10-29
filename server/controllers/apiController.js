import { baseUrl } from "../utils/baseUrl.js";
import axios from "axios";

const getAllSeries = async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}series`, {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.RAPID_HOST,
      },
    });
    res.status(200).json({
      status: "success",
      message: "All series list!",
      data: response.data,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something bad happen!",
      error: err,
    });
  }
};

const fixtureMatches = async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}fixtures`, {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.RAPID_HOST,
      },
    });
    res.status(200).json({
      status: "success",
      message: "Fixture Matches",
      data: response.data,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something bad happen!",
      error: err,
    });
  }
};

const fixtureBySeries = async (req, res) => {
  try {
    const response = await axios.get(
      `${baseUrl}fixtures-by-series/${req.params.seriesId}`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": process.env.RAPID_HOST,
        },
      }
    );
    res.status(200).json({
      status: "success",
      message: "fixture matches that are organise by series!",
      data: response.data,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something bad happen!",
      error: err,
    });
  }
};

const fixtureByDate = async (req, res) => {
  try {
    const response = await axios.get(
      `${baseUrl}fixtures-by-date/${req.params.date}`,
      {
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": process.env.RAPID_HOST,
        },
      }
    );
    res.status(200).json({
      status: "success",
      message: "fixture matches that are organise by date!",
      data: response.data,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something bad happen!",
      error: err,
    });
  }
};

const results = async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}results`, {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.RAPID_HOST,
      },
    });
    res.status(200).json({
      status: "success",
      message: "results!",
      data: response.data,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something bad happen!",
      error: err,
    });
  }
};

const scoreCard = async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}match/${req.params.matchId}`, {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.RAPID_HOST,
      },
    });
    res.status(200).json({
      status: "success",
      message: "results!",
      data: response.data,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something bad happen!",
      error: err,
    });
  }
};

export {
  getAllSeries,
  fixtureMatches,
  fixtureBySeries,
  fixtureByDate,
  results,
  scoreCard,
};
