package com.example.demo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="Consulta")
public class Consulta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public String getNombre() {
        return Nombre;
    }

    public void setNombre(String nombre) {
        Nombre = nombre;
    }

    private String Nombre;

    public String getApeliido() {
        return Apeliido;
    }

    public void setApeliido(String apeliido) {
        Apeliido = apeliido;
    }

    public String getCorreo() {
        return Correo;
    }

    public void setCorreo(String correo) {
        Correo = correo;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    private String Apeliido;

    private String Correo;

    private String numero;

    private String mensaje;


    public Consulta(String nombre, String apeliido, String correo, String numero, String mensaje) {
        Nombre = nombre;
        Apeliido = apeliido;
        Correo = correo;
        this.numero = numero;
        this.mensaje = mensaje;
    }
    public Consulta(){}
}
