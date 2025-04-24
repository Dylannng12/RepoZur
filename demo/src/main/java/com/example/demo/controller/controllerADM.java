package com.example.demo.controller;

import com.example.demo.Entity.Userr;
import com.example.demo.Service.UserService;
import com.example.demo.config.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RequestMapping("/adm")
public class controllerADM {

    @Autowired
    private UserService userService;

    @GetMapping("/adm")
    public String adm() {

        Userr userr = new Userr();
        userr.setUsername("BenjaGay");
        userr.setPassword("soybenjaymelacomotoda");
        userr.setAuthorities("Administrador");

        return "administradorZur";

    }

}
