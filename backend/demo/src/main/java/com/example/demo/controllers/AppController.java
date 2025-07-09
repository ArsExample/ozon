package com.example.demo.controllers;


import com.example.demo.Entities.User;
import com.example.demo.Repositories.UserRepo;
import com.example.demo.Services.AppService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@RequestMapping("api/v1/apps")
@RestController
@AllArgsConstructor
public class AppController {
    private AppService service;
    @Autowired
    UserRepo userRepo;

    @RequestMapping("/welcome")
    public String welcome(){
        return "Здарова педики";
    }

    @PostMapping("/add-user")
    public String addUser(@RequestBody User user){
        service.addUser(user);
        return "Сосал жорик";
    }
}
