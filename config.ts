import publicKey from "./public.pem";

export const window = {
  width: 900,
  height: 550,
  frame: false,
  resizable: false,
  maximizable: false,
  fullscreenable: false,
  title: "OshamaLauncher",
};

export const api = {
  ws: "ws://202.181.188.89:1370/ws",
  web: "http://202.181.188.89:1370",
  publicKey,
};

export const appPath = ".aurora-launcher";
