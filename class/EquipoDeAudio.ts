import { Electrodomesticos } from "./Electrodemsticos";

export class EquipoDeAudio extends Electrodomesticos{
    
    volumen: number = 0;

    encender(): string {
        this.estado = true;
        return "Equipo de Audio Encendido";
    }

    apagar(): string {
        this.estado = false;
        this.cambiarVolumen(0);
        return "Equipo de Audio Apagado";
    }

    cambiarVolumen(volumen: number): string{
        this.volumen = volumen;
        return "Volumen cambiado a: "+ this.volumen;
    }
}