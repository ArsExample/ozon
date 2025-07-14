package com.example.demo.Repositories;

import com.example.demo.Entities.Product;
import com.example.demo.Entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepo extends CrudRepository<Product,Long> {
    @Override
    Optional<Product> findById(Long Long);

    Optional<User> findByName(String username);

}
