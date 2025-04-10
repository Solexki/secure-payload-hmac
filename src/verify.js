const crypto = require("crypto");

/**
 * Middleware to verify a signed payload.
 * Expects `{ payload, signature }` in `req.body`
 * @param {string} secret - Secret key used for HMAC verification.
 * @returns {Function} - Express middleware
 */

function verifyPayload(secret) {
  return function (req, res, next) {
    const { payload, signature } = req.body;
    if (!payload || !signature) {
      return res.status(400).json({ message: "Payload or signature missing" });
    }
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(JSON.stringify(payload))
      .digest("hex");

    if (signature !== expectedSignature) {
      return res.status(403).json({ message: "Invalid signature" });
    }
    req.body = payload;
    next();
  };
}

module.exports = {
  verifyPayload,
};
