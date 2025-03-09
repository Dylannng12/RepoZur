package com.example.demo.controller;

import com.example.demo.Entity.Consulta;
import com.example.demo.config.ConsultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://127.0.0.1:5500")//poner url de la seccion de administrador
@RestController
@RequestMapping("/VerConsutlas")
public class CnlControlller {

     @Autowired
    private ConsultRepository consultRepository;

    @GetMapping
    public List<Consulta> co() {

        List<Consulta> cns =consultRepository.findAll();

        return cns;

    }

}
