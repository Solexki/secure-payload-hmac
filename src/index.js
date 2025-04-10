const crypto = require("crypto");

/**
 * Sign a payload with a secret word using HMAC SHA256.
 * @param {string} secret - Your secret key.
 * @param {Object} payload - The data you want to send.
 * @returns {{ payload: Object, signature: string }}
 */

function securePayload(secret, payload) {
  const payloadString = JSON.stringify(payload);

  const signature = crypto
    .createHmac("sha256", secret)
    .update(payloadString)
    .digest("hex");

  return {
    payload,
    signature,
  };
}

module.exports = {
  securePayload,
};
