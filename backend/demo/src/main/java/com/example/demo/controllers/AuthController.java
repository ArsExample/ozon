package com.example.demo.controllers;

import com.example.demo.Entities.User;
import com.example.demo.Repositories.UserRepo;
import com.example.demo.Services.AppService;
import com.example.demo.Services.JwtService;
import com.example.demo.Services.MyUserDetailService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
public class AuthController {

    @Autowired
    JwtService jwtService;

    @Autowired
    AppService service;

    @Autowired
    AuthenticationManager authenticationManager;

    MyUserDetailService detailService;

    @CrossOrigin(origins = "")
    @RequestMapping(value = "/login",method = RequestMethod.GET)
    public String login(@RequestBody User user){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getName(), user.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = jwtService.generateToken(user.getName());

        return ResponseEntity.ok(new LoginResponse(token));

    }


    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public String register(@RequestBody User user){

        service.addUser(user);
        return "aaaa";
    }

}
