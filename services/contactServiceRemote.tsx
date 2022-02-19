import 'reflect-metadata'
import axios from "axios";
import { inject, injectable } from "inversify";
import { Symbols } from "../symbols";
import { ContactServiceI } from "./contactServiceI";

@injectable()
export class ContactServiceRemote implements ContactServiceI {
    @inject(Symbols.BACKEND_URL)
    private backendUrl!: string

    async sendContact(arg: {
        name: string,
        email: string,
        message: string,
    }): Promise<void> {
        await axios.post(`${this.backendUrl}/email`, {
            content: JSON.stringify(arg)
        })
    }
}