/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
	readonly FIREBASE_API_KEY: string
	readonly FIREBASE_AUTH_DOMAIN: string
	readonly FIREBASE_PROJECT_ID: string
	readonly FIREBASE_STORAGE_BUCKET: string
	readonly FIREBASE_MESSANGING_SENDER_ID: string
	readonly FIREBASE_APP_ID: string
	readonly FIREBASE_MEASUREMENT_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
