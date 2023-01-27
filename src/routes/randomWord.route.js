const express = require("express");
const app = express.Router();

const array = [
  "Abjure",
  "Future",
  "Picnic",
  "Agonistic",
  "Garland",
  "Protect",
  "Airline",
  "Gigantic",
  "Publish",
  "Bandit",
  "Goofy",
  "Quadrangle",
  "Banquet",
  "Government",
  "Recount",
  "Binoculars",
  "Grandnieces",
  "Redoubtable",
  "Biologist",
  "Handbook",
  "Reflection",
  "Blackboard",
  "Himself",
  "Reporter",
  "Board",
  "Indulge",
  "Ring",
  "Bookworm",
  "Inflatable",
  "Salesclerk",
  "Butterscotch",
  "Inimical",
  "Snapshot",
  "Camera",
  "Interim",
  "Shellfish",
  "Campus",
  "Invest",
  "Ship",
  "Catfish",
  "Jackpot",
  "Significance",
  "Carsick",
  "Kitchenette",
  "Sometimes",
  "Celebrate",
  "Law",
  "Sublime",
  "Celery",
  "Life",
  "Tabletop",
  "Citizen",
  "Lifeline",
  "Teamwork",
  "Coloring",
  "Love",
  "Tennis",
  "Compact",
  "Magnificent",
  "Timesaving",
  "Dark",
  "Malevolence",
  "Tree",
  "Damage",
  "Man",
  "Termination",
  "Dangerous",
  "Mascot",
  "Underestimate",
  "Decorum",
  "Marshmallow",
  "Vineyard",
  "Endorse",
  "Mine",
  "War",
  "Engender",
  "Moonwalk",
  "Way",
  "Erratic",
  "Near",
  "Wealth",
  "Envelope",
  "Nephogram",
  "Wednesday",
  "Etymology",
  "Newborn",
  "World",
  "Eyewitness",
  "Noisome",
  "Xerox",
  "Eulogy",
  "Owl",
  "You",
  "Fish",
  "Parenthesis",
  "Zestful",
  "Food",
  "Perpetrator",
  "Foreclose",
  "Phone",
];

app.get("/", (req, res) => {
  res.status(200).send({word: array[Math.floor(Math.random() * 99)]});
});

module.exports = app;