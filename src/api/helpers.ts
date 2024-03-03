import crypto from "crypto";

const md5 = (str: string) => crypto.createHash("md5").update(str).digest("hex");

export const getApiParams = () => {
  const publicKey = process.env.MARVEL_PUBLIC_KEY ?? "";
  const privateKey = process.env.MARVEL_PRIVATE_KEY ?? "";

  const ts = new Date().getTime().toString();

  const message = ts + privateKey + publicKey;
  const hash = md5(message);

  return { apikey: publicKey, ts, hash };
};
