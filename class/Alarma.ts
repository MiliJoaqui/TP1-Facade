import { Electrodomesticos } from "./Electrodemsticos";

export class Alarma extends Electrodomesticos{
    
    encender(): string {
        this.estado = true;
        return "Alarma Activada";
    }

    apagar(): string {
        this.estado = false;
        return "Alarma Desactivada";
    }
}