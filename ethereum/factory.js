import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x450dF2a13bab017264B8E44e55613383f068e9b6"
);

export default instance;
