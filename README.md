# 🌐 OAuth Demo App (Google & GitHub) – Node.js + Express ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)


This is a simple demo application that demonstrates how to implement **OAuth login with Google and GitHub** in a Node.js + Express backend.

✅ **Live Demo**: [https://oauthshubh.vercel.app](https://oauthshubh.vercel.app)

---

## 📌 Features

- 🔐 Login with **Google OAuth**
- 🐱 Login with **GitHub OAuth**
- 💾 Session management using `express-session`
- 👤 User serialization & deserialization with `passport`
- 🚀 Deployed on **Vercel**

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Passport.js
- Google OAuth 2.0 Strategy
- GitHub OAuth2 Strategy
- TypeScript
- dotenv for env management

---

## 📁 Folder Structure

```
├── config
│   └── passport.ts         # OAuth strategies and Passport config
├── routes
│   └── auth.ts             # Routes for login/logout/callback
├── index.ts                # Main server file
├── .env                    # Environment variables
├── package.json
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file in the root of your project and add the following:

```env
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

SESSION_SECRET=your_session_secret
BASE_URL=https://oauthshubh.vercel.app
```

---

## 🚀 How to Run Locally

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/oauth-demo.git
   cd oauth-demo
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Add `.env` file** with your credentials.

4. **Start the server**  
   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3001`

---

## 🔑 How OAuth Works (Simplified)

1. User clicks "Login with Google/GitHub".
2. They're redirected to the provider's login page.
3. After authentication, they're redirected back to `/auth/google/callback` or `/auth/github/callback`.
4. Passport verifies the user and creates a session.
5. User is redirected to `/protected`.

---

## 📸 UI Preview

```html
Welcome to OAuth Test Application!

[Login with Google] | [Login with GitHub]

[Protected Route]
```

If authenticated, you’ll see your name and a logout option.

---

## 🌍 Production Redirect URIs

Make sure you've added these to your **Google/GitHub OAuth app settings**:

### ✅ Google

- Authorized redirect URI:  
  `https://oauthshubh.vercel.app/auth/google/callback`

### ✅ GitHub

- Authorization callback URL:  
  `https://oauthshubh.vercel.app/auth/github/callback`

---

## 🤝 Contributions

Feel free to fork, tweak, and open PRs. If you use this, drop a ⭐ and share your version!

---

## 🧑‍💻 Author

Made with ❤️ by [Shubhashish Chakraborty](https://github.com/Shubhashish-Chakraborty)  
🔗 [My Portfolio](https://imshubh.site)

---
