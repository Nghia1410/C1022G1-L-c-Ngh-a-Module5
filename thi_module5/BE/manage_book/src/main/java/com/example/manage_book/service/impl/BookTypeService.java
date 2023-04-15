package com.example.manage_book.service.impl;


import com.example.manage_book.dto.BookDTO;
import com.example.manage_book.model.Book;
import com.example.manage_book.model.BookType;
import com.example.manage_book.repository.IBookTypeRepository;
import com.example.manage_book.service.IBookTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Service
public class BookTypeService implements IBookTypeService {
@Autowired
private IBookTypeRepository bookTypeRepository;

    @Override
    public List<BookType> findAll() {
        return bookTypeRepository.findAllBookType();
    }

    @Override
    public BookType findById(int id) {
        BookType bookTypeDTO = new BookType();
        BookType bookType = bookTypeRepository.findById(id);
        Set<Book> bookSet = bookType.getBookSet();
        Set<BookDTO> bookDTOSet = new HashSet<>();
        BookDTO bookDTO;
        for (Book book : bookSet) {
            bookDTO = new BookDTO();
            BeanUtils.copyProperties(book, bookDTO);
            bookDTOSet.add(bookDTO);
        }
        BeanUtils.copyProperties(bookType, bookTypeDTO);
        bookTypeDTO.setBookSet(bookSet);
        return bookTypeDTO;
    }
}
