import { auth, type AuthResult } from "express-oauth2-jwt-bearer";
import { type Request } from "express";

// Extend Request to include JWT claims
export interface AuthRequest extends Request {
  auth?: AuthResult & {
    sub?: string;
    email?: string;
  };
}

// Auth0 config
export const authenticateToken = auth({
  audience: "https://doripomo-api.com",
  issuerBaseURL: "https://doripomo.us.auth0.com/",
  tokenSigningAlg: "RS256",
});
