import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import crypto from "crypto";
import { getApiParams } from "../helpers";

process.env.MARVEL_PUBLIC_KEY = "public_key";
process.env.MARVEL_PRIVATE_KEY = "private_key";

describe("characters api helpers", () => {
  beforeAll(() => {
    const date = new Date(1998, 11, 19);

    vi.useFakeTimers();
    vi.setSystemTime(date);
  });
  afterAll(() => {
    vi.useRealTimers();
  });

  it("should return correct api params", () => {
    const { apikey, ts, hash } = getApiParams();

    const expectedTs = new Date().getTime().toString();
    const message = expectedTs + "private_key" + "public_key";
    const expectedHash = crypto.createHash("md5").update(message).digest("hex");

    expect(apikey).toEqual("public_key");
    expect(ts).toEqual(expectedTs);
    expect(hash).toEqual(expectedHash);
  });

  it("should handle missing environment variables", () => {
    delete process.env.MARVEL_PUBLIC_KEY;
    delete process.env.MARVEL_PRIVATE_KEY;

    const { apikey, ts, hash } = getApiParams();

    expect(apikey).toEqual("");
    expect(ts).toBeDefined();
    expect(hash).toBeDefined();
  });
});
