package com.example.manage_book.service;

import com.example.manage_book.model.BookType;

import java.util.List;


public interface IBookTypeService {
    List<BookType> findAll();

    BookType findById(int id);
}
