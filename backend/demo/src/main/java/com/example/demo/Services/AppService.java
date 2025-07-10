package com.example.demo.Services;

import com.example.demo.Entities.User;
import com.example.demo.Repositories.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
@Service
@AllArgsConstructor
public class AppService {

    @Autowired
    private final UserRepo userRepo;

    private PasswordEncoder passwordEncoder;


    public void addUser(@RequestBody User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepo.save(user);

    }


}
