package com.onlykashmir.controller;

import com.onlykashmir.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.Map;

@Controller
public class HomeController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/destinations")
    public String destinations() {
        return "destinations";
    }

    @GetMapping("/destinations/{slug}")
    public String destinationDetail() {
        return "destination-detail";
    }

    @GetMapping("/packages")
    public String packages() {
        return "packages";
    }

    @GetMapping("/packages/{packageName}")
    public String packageDetail() {
        return "package-detail";
    }

    @GetMapping("/adventure")
    public String adventure() {
        return "adventure";
    }

    @GetMapping("/gallery")
    public String gallery() {
        return "gallery";
    }

    @GetMapping("/reviews")
    public String reviews() {
        return "reviews";
    }

    @GetMapping("/hotels")
    public String hotels() {
        return "hotels";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/cabs")
    public String cabs() {
        return "cabs";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }

    @GetMapping("/callback")
    public String callback() {
        return "callback";
    }

    @PostMapping("/api/enquiry")
    @ResponseBody
    public Map<String, String> submitEnquiry(@RequestBody Map<String, String> enquiryData) {
        // Log the enquiry data (in production, save to database)
        System.out.println("Trip Enquiry Received: " + enquiryData);
        
        // Send email
        emailService.sendEnquiryEmail("Trip Enquiry", enquiryData);
        
        // Return success response
        return Map.of(
            "status", "success",
            "message", "Thank you for your enquiry! We will contact you shortly."
        );
    }

    @PostMapping("/api/package-enquiry")
    @ResponseBody
    public Map<String, String> submitPackageEnquiry(@RequestBody Map<String, String> enquiryData) {
        // Log the enquiry data (in production, save to database)
        System.out.println("Package Enquiry Received: " + enquiryData);
        
        // Send email
        emailService.sendEnquiryEmail("Package Enquiry", enquiryData);
        
        // Return success response
        return Map.of(
            "status", "success",
            "message", "Thank you for your enquiry! We will contact you shortly to finalize your booking."
        );
    }

    @PostMapping("/api/contact")
    @ResponseBody
    public Map<String, String> submitContact(@RequestBody Map<String, String> contactData) {
        // Log the contact data (in production, save to database)
        System.out.println("Contact Form Received: " + contactData);
        
        // Send email
        emailService.sendEnquiryEmail("Contact Form", contactData);
        
        // Return success response
        return Map.of(
            "status", "success",
            "message", "Thank you for contacting us! We will get back to you soon."
        );
    }

    @PostMapping("/api/callback")
    @ResponseBody
    public Map<String, String> submitCallback(@RequestBody Map<String, String> callbackData) {
        // Log the callback data (in production, save to database)
        System.out.println("Callback Request Received: " + callbackData);
        
        // Send email
        emailService.sendEnquiryEmail("Callback Request", callbackData);
        
        // Return success response
        return Map.of(
            "status", "success",
            "message", "Thank you for your request! We will call you shortly."
        );
    }

    @PostMapping("/api/plan-trip")
    @ResponseBody
    public Map<String, String> submitPlanTrip(@RequestBody Map<String, String> planData) {
        // Log the plan data (in production, save to database)
        System.out.println("Plan Trip Request Received: " + planData);
        
        // Send email
        emailService.sendEnquiryEmail("Plan Trip Request", planData);
        
        // Return success response
        return Map.of(
            "status", "success",
            "message", "Thank you for your request! We will help you plan your trip."
        );
    }
}