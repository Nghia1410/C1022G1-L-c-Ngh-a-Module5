package com.example.manage_book.service.impl;

import com.example.manage_book.dto.BookDTO;
import com.example.manage_book.model.Book;
import com.example.manage_book.model.BookType;
import com.example.manage_book.repository.IBookRepository;
import com.example.manage_book.service.IBookService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService implements IBookService {
    @Autowired
    private IBookRepository bookRepository;

    @Override
    public Page<Book> findByName(String name, Pageable pageable) {
        List<BookDTO> bookDTOList = new ArrayList<>();
        Page<Book> bookPage = bookRepository.findByName(name, pageable);
        BookDTO bookDTO;
        for (Book book : bookPage) {
            bookDTO = new BookDTO();
            bookDTO.setBookTypeDTO(new BookType());
            BeanUtils.copyProperties(book.getBookType(), bookDTO.getBookTypeDTO());
            BeanUtils.copyProperties(book, bookDTO);
            bookDTOList.add(bookDTO);
        }
        return new PageImpl<>(bookDTOList);
    }

    @Override
    public BookDTO findById(int id) {
        BookDTO bookDTO = new BookDTO();
        Book book = bookRepository.findById(id);
        bookDTO.setBookTypeDTO(new BookTypeDTO());
        BeanUtils.copyProperties(book.getBookType(), bookDTO.getBookTypeDTO());
        BeanUtils.copyProperties(book, bookDTO);
        return bookDTO;
    }

    @Override
    public void save(Book book) {
        bookRepository.save(book);
    }

    @Override
    public void deleteBook(int id) {
        bookRepository.deleteBook(id);
    }
}
