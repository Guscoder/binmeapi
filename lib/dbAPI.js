const { dbQuery } = require("./db-query");

const createBin = async (binend, datetime, status) => {
  const CREATE_BIN =
    "INSERT INTO bins" +
    "  (bin_endpoint, created_at, is_expired)" +
    "  VALUES ($1, $2, $3)";
  let result = await dbQuery(CREATE_BIN, binend, datetime, status);
  return result.rowCount > 0;
};

const getBinRequests = async (binId) => {
  const GET_BINS =
    "SELECT requests.payload, requests.received_at, requests.bins_id, requests.method, requests.headers FROM requests WHERE bins_id = $1";
  let result = await dbQuery(GET_BINS, binId).catch((error) =>
    console.log(error)
  );
  return result.rows;
};

const addRequest = async (binId, payload, method, headers, received_at) => {
  const INSERT_REQUEST =
    "INSERT INTO requests" +
    "(bins_id, payload, method, headers, received_at) " +
    "VALUES ($1, $2, $3, $4, $5)";

  let result = await dbQuery(
    INSERT_REQUEST,
    binId,
    payload,
    method,
    headers,
    received_at
  ).catch((error) => console.log(error));
  return result.rowCount > 0;
};

module.exports = { createBin, getBinRequests, addRequest };
