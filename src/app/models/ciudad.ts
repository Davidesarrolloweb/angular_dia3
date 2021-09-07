import { Propiedades } from "./propiedades";

export class Ciudad {
    constructor(
        public ciudad:string | undefined,
        public pais:string | undefined,
        public codigo:string | undefined,
        public clima: Propiedades | undefined,
        ){}
    
}
