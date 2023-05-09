#!/usr/bin/env ts-node
import { parse, unparse } from "papaparse";
import { readFileSync, writeJsonSync } from "fs-extra";
import moment from "moment";

// id, date, beachName, sampleLocation, enterococciResults, unitOrNotes
const raw = readFileSync("raw.csv").toString();
const res = parse<Array<any>>(raw);
console.log(res.data.shift());

type Details = { n: number; sum: number };
const formattedData: Record<string, Record<string, Details>> = {};
res.data.forEach((record) => {
  const [
    id,
    date,
    beachName,
    sampleLocation,
    enterococciResults,
    unitsOrNotes,
  ] = record;
  const parsedResult = Number(enterococciResults);
  if (isNaN(parsedResult))
    return console.info(`throwing a row w/ result NaN`, record);
  const time = moment(record[1], "MM-DD-YYYY");
  if (time.year() < 2020 || time.year() > 2022) return;
  if (!(beachName in formattedData)) formattedData[beachName] = {};
  const monthKey = `${time.year()}-${time.month()}`;
  if (!(monthKey in formattedData[beachName]))
    formattedData[beachName][monthKey] = { n: 0, sum: 0 };
  formattedData[beachName][monthKey].n += 1;
  formattedData[beachName][monthKey].sum += parsedResult;
});

const calculatedData: Record<string, Record<string, number>> = {};
Object.keys(formattedData).forEach((beachName) => {
  if (!(beachName in calculatedData)) calculatedData[beachName] = {};
  Object.keys(formattedData[beachName]).forEach((monthKey) => {
    calculatedData[beachName][monthKey] =
      formattedData[beachName][monthKey].sum /
      formattedData[beachName][monthKey].n;
  });
});
writeJsonSync("data.json", calculatedData, { spaces: "  " });
console.log(
  "Data generation done. There are",
  Object.keys(calculatedData).length,
  "beaches."
);
