import dotenv from 'dotenv'
dotenv.config();

const serviceAccount = {
  "type": "service_account",
  "project_id": "blog-app-aab8d",
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  "client_email": "firebase-adminsdk-iuz8l@blog-app-aab8d.iam.gserviceaccount.com",
  "client_id": "113547716353200767068",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-iuz8l%40blog-app-aab8d.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
export default serviceAccount;