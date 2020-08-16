import client from "./clinet";

const endpoint = "/listings";
const getListings = () => client.get(endpoint);
