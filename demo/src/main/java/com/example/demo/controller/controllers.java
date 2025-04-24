package com.example.demo.controller;

import com.example.demo.Entity.Consulta;
import com.example.demo.Service.UserService;
import com.example.demo.config.ConsultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
//@CrossOrigin(origins = "https://zurgraphic.com")
@RestController
@RequestMapping("/Zur")
public class controllers {

    @Autowired
    private UserService userService;

    @Autowired
    private ConsultRepository consultRepository;

    @PostMapping("/consultasEntrante")
    public Consulta crearConsulta(@RequestBody Consulta consulta){

          return  consultRepository.save(consulta);

    }

}
