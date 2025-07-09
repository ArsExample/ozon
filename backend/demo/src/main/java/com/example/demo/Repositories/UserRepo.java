package com.example.demo.Repositories;

import com.example.demo.Entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface  UserRepo extends CrudRepository<User, Long> {
    Optional<User> findByName(String username);
}
