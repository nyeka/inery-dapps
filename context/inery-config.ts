import { Api, JsonRpc, JsSignatureProvider } from "ineryjs";

const url = "http://159.223.192.168:8888";
const json_rpc = new JsonRpc(url);
const private_key = process.env.PRIVATE_KEY;
const actor = "nyoman";
const signature = new JsSignatureProvider([private_key!]);

const api = new Api({
  rpc: json_rpc,
  signatureProvider: signature,
});

export { api, actor };