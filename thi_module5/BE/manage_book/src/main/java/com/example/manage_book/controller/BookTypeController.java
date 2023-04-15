package com.example.manage_book.controller;

import com.example.manage_book.model.BookType;
import com.example.manage_book.service.IBookTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("bookType")
public class BookTypeController {
    @Autowired
    private IBookTypeService bookTypeService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<BookType> listBookType() {
        return bookTypeService.findAll();
    }
}


