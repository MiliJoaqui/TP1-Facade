import { Electrodomesticos } from "./Electrodemsticos";

export class AireAcondicionado extends Electrodomesticos{

    temperatura: number=0;

    // Metodos
    public cambiarTemperatura(temperatura: number): string{
        this.temperatura = temperatura;
        return "Temperatura cambiada"+ this.temperatura;
    }
    encender(): string {
        this.estado = true;
        return "Aire Encendido";
    }

    apagar(): string {
        this.estado = false;
        this.cambiarTemperatura(0);
        return "Aire Apagado";
    }
}