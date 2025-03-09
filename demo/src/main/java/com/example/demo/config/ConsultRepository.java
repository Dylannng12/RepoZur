package com.example.demo.config;

import com.example.demo.Entity.Consulta;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsultRepository extends JpaRepository<Consulta,Long> {

    @Override
    List<Consulta> findAll();
}