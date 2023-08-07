const fs = require("fs");
const { compileFromFile } = require("json-schema-to-typescript");
const path = require("path");

// compile from file
compileFromFile(`${__dirname}/people.json`).then((ts) =>
  fs.writeFileSync(`${__dirname}/../types/people.d.ts`, ts)
);
compileFromFile(`${__dirname}/species.json`).then((ts) =>
  fs.writeFileSync(`${__dirname}/../types/species.d.ts`, ts)
);
compileFromFile(`${__dirname}/films.json`).then((ts) =>
  fs.writeFileSync(`${__dirname}/../types/films.d.ts`, ts)
);
