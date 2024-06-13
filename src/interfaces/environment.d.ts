declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      FRONTEND_URL: "http://127.0.01:5173";
      PORT?: number;
      ACCESS_TOKEN_SECRET: string;
      HUDDLE_API_KEY: string
    }
  }
}

export {};
