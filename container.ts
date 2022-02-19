import { Container } from "inversify";
import { ContactServiceI } from "./services/contactServiceI";
import { ContactServiceRemote } from "./services/contactServiceRemote";
import { Symbols } from "./symbols";

let container = new Container()

container.bind<ContactServiceI>(Symbols.CONTACT_SERVICE).to(ContactServiceRemote)
container.bind<string>(Symbols.BACKEND_URL).toConstantValue(process.env.NEXT_PUBLIC_BACKEND_URL!)

export default container