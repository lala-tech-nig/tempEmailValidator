// const express = require('express');
// const cors = require('cors');
// const { isEmail } = require('validator');
// const { isDisposable, isGmailAlias } = require('./utils/emailChecker');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Welcome to the LALA TECH Email Checker API!');
// });

// app.post('/api/check-email', (req, res) => {
//   const { email } = req.body;

//   if (!email || !isEmail(email)) {
//     return res.status(400).json({ valid: false, reason: 'Invalid email format' });
//   }

//   if (isDisposable(email)) {
//     return res.json({ valid: false, reason: 'Disposable email address is not allowed' });
//   }

//   if (isGmailAlias(email)) {
//     return res.json({ valid: false, reason: 'Gmail alias (+) is not accepted' });
//   }

//   return res.json({ valid: true, reason: 'Email is valid and accepted' });
// });

// app.listen(PORT, () => {
//   console.log(`✅ Email Checker API running on port ${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const { isEmail } = require('validator');
const { isDisposable, isGmailAlias } = require('./utils/emailChecker');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome endpoint
 *     responses:
 *       200:
 *         description: Returns a welcome message
 */
app.get('/', (req, res) => {
  res.send('Welcome to the Email Checker API!');
});

/**
 * @swagger
 * /api/check-email:
 *   post:
 *     summary: Validate an email address
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user+test@gmail.com"
 *     responses:
 *       200:
 *         description: Email validation result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 valid:
 *                   type: boolean
 *                 reason:
 *                   type: string
 */


app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Email Checker API! Use /api/check-email to validate an email address.',
  });
});

app.post('/api/check-email', (req, res) => {
  const { email } = req.body;

  if (!email || !isEmail(email)) {
    return res.status(400).json({ valid: false, reason: 'Invalid email format' });
  }

  if (isDisposable(email)) {
    return res.json({ valid: false, reason: 'Disposable email address is not allowed' });
  }

  if (isGmailAlias(email)) {
    return res.json({ valid: false, reason: 'Gmail alias (+) is not accepted' });
  }

  return res.json({ valid: true, reason: 'Email is valid and accepted' });
});

app.listen(PORT, () => {
  console.log(`✅ Email Checker API running on port ${PORT}`);
  console.log(`📘 Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
