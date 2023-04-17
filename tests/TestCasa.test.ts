import { FacadeCasaInteligente } from "../class/FacadeCasaInteligente";
import { AireAcondicionado } from "../class/AireAcondicionado";
import { Alarma } from "../class/Alarma";
import { AspiradoraAutomatica } from "../class/AspiradoraAutomatica";
import { EquipoDeAudio } from "../class/EquipoDeAudio";
import { Luces } from "../class/Luces";
import { PuertasSeguro } from "../class/PuertasSeguro";
import { Ventilador } from "../class/Ventilador";
//crear objetos
const aireAcondicionado = new AireAcondicionado();
const alarma = new Alarma();
const aspiradoraAutomatica = new AspiradoraAutomatica();
const equipoDeAudio = new EquipoDeAudio();
const luces = new Luces();
const puertasSeguro = new PuertasSeguro();
const ventilador = new Ventilador();

const casa = new FacadeCasaInteligente(aireAcondicionado, alarma, aspiradoraAutomatica, equipoDeAudio, luces, puertasSeguro, ventilador);
test ("Test llegar a casa", () => {
    casa.llgarCasa();
    expect(aireAcondicionado.estado).toBe(true);
    expect(aireAcondicionado.temperatura).toBe(24);
    expect(alarma.estado).toBe(false);
    expect(aspiradoraAutomatica.estado).toBe(false);
    expect(equipoDeAudio.estado).toBe(true);
    expect(equipoDeAudio.volumen).toBe(5);
    expect(luces.estado).toBe(true);
    expect(puertasSeguro.estado).toBe(false);
    expect(ventilador.estado).toBe(true);
    expect(ventilador.velocidad).toBe(3);
});


test ("Test salir de casa", () => {
    casa.salirCasa();
    expect(aireAcondicionado.estado).toBe(false);
    expect(alarma.estado).toBe(true);
    expect(aspiradoraAutomatica.estado).toBe(true);
    expect(equipoDeAudio.estado).toBe(false);
    expect(luces.estado).toBe(false);
    expect(puertasSeguro.estado).toBe(true);
    expect(ventilador.estado).toBe(false);
});

test ("Test irse a dormir", () => {
    casa.irseADormir();
    expect(aireAcondicionado.temperatura).toBe(22);
    expect(alarma.estado).toBe(true);
    expect(equipoDeAudio.volumen).toBe(1);
    expect(luces.estado).toBe(false);
    expect(ventilador.estado).toBe(false);
    expect(puertasSeguro.estado).toBe(true);
});

test ("Test levantarse", () => {
    casa.levantarse();
    expect(aireAcondicionado.temperatura).toBe(24);
    expect(alarma.estado).toBe(false);
    expect(equipoDeAudio.volumen).toBe(5);
    expect(luces.estado).toBe(true);
    expect(ventilador.estado).toBe(true);
    expect(puertasSeguro.estado).toBe(true);
});

test("Test cambiar temperatura", () => {
    expect(casa.aireAcondicionado.cambiarTemperatura(30)).toBe("Temperatura cambiada30");
});

test("Test Apagar ventilador", () => {
    expect(casa.ventilador.apagar()).toBe("Ventilador Apagado");
    expect(casa.ventilador.velocidad).toBe(0);
});