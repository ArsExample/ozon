package com.example.demo.controllers;


import com.example.demo.Entities.User;
import com.example.demo.Repositories.UserRepo;
import com.example.demo.Services.AppService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
@RestController
@AllArgsConstructor
public class AppController {
    private AppService service;
    @Autowired

    @RequestMapping("/")
    public String welcome(){
        return "Здарова педики";
    }




}
