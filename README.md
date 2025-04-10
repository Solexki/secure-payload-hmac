# secure-payload-hmac

**Lightweight HMAC-based payload protection for HTTP requests**

A minimal and intuitive way to sign and verify request payloads using HMAC (SHA-256). This package is designed for developers who want a simple, fast, and reliable way to protect internal APIs, microservices, or bot communication—without the overhead of complex authentication frameworks.

---

## 🌱 Why This Exists

While building a Telegram WebApp, I noticed how exposed most request payloads are—mine included. Anyone with basic knowledge of tools like Postman can easily copy a request and spoof it. That felt risky and unnecessary, especially for internal tools or trusted environments.

Existing solutions, while robust, often felt like overkill for such a lightweight need. So I built `secure-payload-hmac`—a small utility to add basic payload integrity and authenticity with almost zero friction.

---

## ✨ Features

- 🔐 HMAC-SHA256 signing for request payloads
- 🧠 Stateless request verification—no session or DB required
- 🪶 Lightweight—no external dependencies
- ⚡️ Drop-in Express-style middleware for Node.js servers

---

## 📦 Installation

````bash
npm install secure-payload-hmac


## Usage

# Client (sign payload)

```bash
const { securePayload } = require('secure-payload-hmac');

const signed = securePayload('my-secret', { userId: 42 });
console.log(signed);
// {
//   payload: { userId: 42 },
//   signature: 'a1b2c3...'
// }
````

# Server (verify payload)

```bash
const express = require('express');
const { verifyPayload } = require('secure-payload-hmac');

const app = express();
app.use(express.json());
app.post('/protected', verifyPayload('my-secret'), (req, res) => {
  res.json({ status: 'OK', data: req.body });
});
```

## 🤝 Contributing

I'm building this with simplicity and purpose in mind. If you have ideas for improvements, optimizations, or additional features, your contributions are welcome!

The long-term goal is to remain lightweight, transparent, and useful to developers who need just a little more security without extra baggage.

## ⚠️ Important Note

This package is intended for Node.js environments only.
It will not work in React or other browser-based applications due to reliance on the native crypto module.

## 🧩 License

MIT – use freely, contribute openly.
