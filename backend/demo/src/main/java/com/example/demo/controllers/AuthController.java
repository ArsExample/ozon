package com.example.demo.controllers;

import com.example.demo.Entities.User;
import com.example.demo.Repositories.UserRepo;
import com.example.demo.Services.AppService;
import com.example.demo.Services.MyUserDetailService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
public class AuthController {

    @Autowired
    AppService service;

    MyUserDetailService detailService;

    @RequestMapping(value = "/login",method = RequestMethod.GET)
    public String login(User user){
        return "xuy";

    }


    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public String register(@RequestBody User user){

        service.addUser(user);
        return "aaaa";
    }

}
