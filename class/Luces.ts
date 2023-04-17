import { Electrodomesticos } from "./Electrodemsticos";

export class Luces extends Electrodomesticos{
    
    encender(): string {
        this.estado = true;
        return "Luz Encendida";
    }

    apagar(): string {
        this.estado = false;
        return "Luz Apagada";
    }
}
    

