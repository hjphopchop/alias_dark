namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_USER: string;
    POSTGRES_DB: string;

    DB_HOST: string;

    DATABASE_URL: string;

    APP_HOSTNAME: string;
    NEXTAUTH_URL: string;
    PORT: string;
    NEXT_PUBLIC_HOST: string;
  }
}
