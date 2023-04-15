package com.example.manage_book.controller;

import com.example.manage_book.dto.BookDTO;
import com.example.manage_book.model.Book;
import com.example.manage_book.model.BookType;
import com.example.manage_book.service.IBookService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin("*")
@RequestMapping("/book")
public class BookController {
        @Autowired
        private IBookService bookService;
        @ResponseStatus(HttpStatus.OK)
        @GetMapping("")
        public Page<Book> showList(@RequestParam(required = false, defaultValue = "") String name,
                                      @PageableDefault(size = 4) Pageable pageable) {
            return bookService.findByName(name, pageable);
        }
        @PostMapping("")
        @ResponseStatus(HttpStatus.CREATED)
        public void create(@RequestBody BookDTO bookDTO) {
            Book book = new Book();
            book.setBookType(new BookType(bookDTO.getBookTypeDTO().getId()));
            BeanUtils.copyProperties(bookDTO.getBookTypeDTO(), book.getBookType());
            BeanUtils.copyProperties(bookDTO, book);
            bookService.save(book);
        }
        @DeleteMapping("")
        @ResponseStatus(HttpStatus.OK)
        public void delete(@RequestParam(required = false) Integer id) {
            bookService.deleteBook(id);
        }
    }
