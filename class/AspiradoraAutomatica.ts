import { Electrodomesticos } from "./Electrodemsticos"

export class AspiradoraAutomatica extends Electrodomesticos{

    encender(): string {
        this.estado = true;
        return "Aspiradora Automatica Activada";
    }

    apagar(): string {
        this.estado = false;
        return "Aspiradora Automatica Desactivada";
    }
}