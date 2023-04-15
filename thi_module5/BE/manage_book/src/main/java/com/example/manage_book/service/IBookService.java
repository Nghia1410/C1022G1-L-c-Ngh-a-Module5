package com.example.manage_book.service;

import com.example.manage_book.dto.BookDTO;
import com.example.manage_book.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public interface IBookService {
    Page<Book> findByName(String name, Pageable pageable);

    BookDTO findById(int id);

    void save(Book book);

    void deleteBook(int id);
}
