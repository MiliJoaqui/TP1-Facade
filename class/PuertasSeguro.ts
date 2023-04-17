import { Electrodomesticos } from "./Electrodemsticos";

export class PuertasSeguro extends Electrodomesticos{
    
    encender(): string {
        this.estado = true;
        return "Puerta Cerrada";
    }

    apagar(): string {
        this.estado = false;
        return "Puerta abierta";
    }
}
    
