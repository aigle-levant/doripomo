import rateLimit from "express-rate-limit";

// limit is for 15 mins
export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
