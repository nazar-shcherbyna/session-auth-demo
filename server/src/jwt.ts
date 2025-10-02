import { SignJWT, jwtVerify } from "jose";

export function createSigner(secret: Buffer, issuer: string, audience: string) {
  return (payload: object, now: Date, ttlSec: number) => {
    return new SignJWT({ ...payload })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt(Math.floor(now.getTime() / 1000))
      .setExpirationTime(Math.floor(now.getTime() / 1000) + ttlSec)
      .setIssuer(issuer)
      .setAudience(audience)
      .sign(secret);
  };
}

export function createVerifier(
  secret: Buffer,
  issuer: string,
  audience: string
) {
  return async (token: string) => {
    const r = await jwtVerify(token, secret, { issuer, audience });
    return r.payload;
  };
}
