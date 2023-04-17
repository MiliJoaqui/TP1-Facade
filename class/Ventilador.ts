import { Electrodomesticos } from "./Electrodemsticos";

export class Ventilador extends Electrodomesticos{
    velocidad: number=0;

    cambiarvelocidad(velocidad: number): string{
        this.velocidad = velocidad;
        return "Velocidad cambiada a: "+ this.velocidad;
    }
    encender(): string {
        this.estado = true;
        return "Ventilador Encendido";
    }

    apagar(): string {
        this.cambiarvelocidad(0);
        this.estado = false;
        return "Ventilador Apagado";
    }
}