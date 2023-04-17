import { iElectrodomesticos } from "./iElectrodomesticos";

export class Electrodomesticos implements iElectrodomesticos{
    estado: boolean=false;
    encender(): string {
        this.estado = true;
        return "Encendido";
    }

    apagar(): string {
        this.estado = false;
        return "Apagado";
    }
}