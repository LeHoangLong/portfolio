export interface ContactServiceI {
    sendContact(arg: {
        name: string,
        email: string,
        message: string,
    }): Promise<void>
}