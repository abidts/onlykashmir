package com.onlykashmir.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

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
}