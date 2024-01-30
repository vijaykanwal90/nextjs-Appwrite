const conf = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
}
console.log(process.env.NEXT_PUBLIC_APPWRITE_URL)
console.log(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)

export default conf