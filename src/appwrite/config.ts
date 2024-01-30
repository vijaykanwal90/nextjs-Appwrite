import conf from "@/conf/config";
import { Client, Account, ID } from "appwrite";


type CreateUserAccount = {
    email: string,
    password: string,
    name: string,
}

type LoginUserAccount = {
    email: string,
    password: string,
}

const appwriteClient = new Client()

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient)
console.log(account)
console.log(conf.appwriteUrl)
console.log(conf.appwriteProjectId)

export class AppwriteService {

    async createUserAccount({
        email, password, name
    }: CreateUserAccount) {
        try {

            const userAccount = await account.create( ID.unique(), email, password, name)
            console.log(userAccount)
            if (userAccount) {
                return this.login({ email, password })
            }
            else {
                return userAccount
            }

        } catch (error: any) {
            console.log("user creation failed")
            throw error
        }
    }

    async login({ email, password }: LoginUserAccount) {

        try {

            return await account.createEmailSession(email, password)

        } catch (error: any) {
            console.log("error while log in")
            throw error

        }

    }

    async isLoggedIn(): Promise<boolean> {

        try {
            const data = await this.getCurrentUser();
            return Boolean(data)

        } catch (error: any) {


        }


        return false

    }

    async getCurrentUser() {

        try {
            return account.get()

        } catch (error) {
            console.log("current user error" + error)

        }
        return null
    }

    async logout() {
        try {

            return await account.deleteSession("current")
        } catch (error) {
            
            console.log("logout error" + error)
        }

    }
}

const appwriteService = new AppwriteService()

export default appwriteService