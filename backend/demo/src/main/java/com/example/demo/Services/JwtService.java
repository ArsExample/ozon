package com.example.demo.Services;

import org.springframework.stereotype.Component;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtService {




        @Value("${jwt.secret}")
        private String jwtSecret;

        @Value("${jwt.expiration}")
        private int jwtExpirationInMs;

        public String generateToken(String username) {
            Date now = new Date();
            Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);

            Map<String, Object> claims = new HashMap<>();
            claims.put("username", username);

            return Jwts.builder()
                    .setClaims(claims)
                    .setIssuedAt(now)
                    .setExpiration(expiryDate)
                    .signWith(SignatureAlgorithm.HS512, jwtSecret)
                    .compact();
        }
    }

