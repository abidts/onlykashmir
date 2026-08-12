package com.onlykashmir.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class EmailService {

    @Value("${app.email.to}")
    private String toEmail;

    public void sendEnquiryEmail(String type, Map<String, String> data) {
        // Log the data regardless of email status
        System.out.println("New " + type + " received:");
        for (Map.Entry<String, String> entry : data.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Email service requires spring-boot-starter-mail dependency
        // Uncomment the dependency in pom.xml and configure SMTP settings to enable email
        System.out.println("Email will be sent to: " + toEmail + " (when email service is configured)");
    }
}