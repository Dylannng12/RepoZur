package com.example.demo.Service;

import com.example.demo.Entity.Userr;
import com.example.demo.config.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService  implements UserDetailsService {

@Autowired
private UserRepository userRepository;

@Autowired
private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

       // Userr userr = (Userr) userRepository.findByUsername(username);

        //sSystem.out.println(userr.getUsername()+userr.getPassword());

        return userRepository.findByUsername(username);

    }

    public String Create(String username,String Password){

        Userr usr = new Userr(
                username,
                new BCryptPasswordEncoder().encode(Password),
                "Administrador"

        );

        userRepository.save(usr);

        return "Usuario Creado";
    }

}
