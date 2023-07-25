const PROJECT_ID = "qo9nr7qv";
const DATASET = "production";
const BASE_URL = `http://localhost:5500`;

const getUrl = (query) => `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${query}`;