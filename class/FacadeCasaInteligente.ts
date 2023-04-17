import { AireAcondicionado } from "./AireAcondicionado";
import { Alarma } from "./Alarma";
import { AspiradoraAutomatica } from "./AspiradoraAutomatica";
import { EquipoDeAudio } from "./EquipoDeAudio";
import { Luces } from "./Luces";
import { PuertasSeguro } from "./PuertasSeguro";
import { Ventilador } from "./Ventilador";

export class FacadeCasaInteligente{
    //implemetan todos los electrodomesticos dentro de la clase
    aireAcondicionado: AireAcondicionado;
    alarma: Alarma;
    aspiradoraAutomatica: AspiradoraAutomatica;
    equipoDeAudio: EquipoDeAudio;
    luces: Luces;
    PuertasSeguro: PuertasSeguro;
    ventilador: Ventilador;

    constructor(aireAcondicionado: AireAcondicionado, alarma: Alarma, aspiradoraAutomatica: AspiradoraAutomatica, equipoDeAudio: EquipoDeAudio, luces: Luces, PuertasSeguro: PuertasSeguro, ventilador: Ventilador){
        this.aireAcondicionado = aireAcondicionado;
        this.alarma = alarma;
        this.aspiradoraAutomatica = aspiradoraAutomatica;
        this.equipoDeAudio = equipoDeAudio;
        this.luces = luces;
        this.PuertasSeguro = PuertasSeguro;
        this.ventilador = ventilador;
    }

    llgarCasa(){
        this.aireAcondicionado.encender();
        this.aireAcondicionado.cambiarTemperatura(24);
        this.alarma.apagar();
        this.aspiradoraAutomatica.apagar();
        this.equipoDeAudio.encender();
        this.equipoDeAudio.cambiarVolumen(5);
        this.luces.encender();
        this.PuertasSeguro.apagar();
        this.ventilador.encender();
        this.ventilador.cambiarvelocidad(3);
    }

    salirCasa(){
        this.aireAcondicionado.apagar();
        this.alarma.encender();
        this.aspiradoraAutomatica.encender();
        this.equipoDeAudio.apagar();
        this.luces.apagar();
        this.PuertasSeguro.encender();
        this.ventilador.apagar();
    }

    irseADormir(){
        this.aireAcondicionado.cambiarTemperatura(22);
        this.alarma.encender();
        this.equipoDeAudio.cambiarVolumen(1);
        this.luces.apagar();
        this.ventilador.apagar();
        this.PuertasSeguro.encender();
    }

    levantarse(){
        this.aireAcondicionado.cambiarTemperatura(24);
        this.alarma.apagar();
        this.equipoDeAudio.cambiarVolumen(5);
        this.luces.encender();
        this.ventilador.encender();
        this.ventilador.cambiarvelocidad(3);
    }

}