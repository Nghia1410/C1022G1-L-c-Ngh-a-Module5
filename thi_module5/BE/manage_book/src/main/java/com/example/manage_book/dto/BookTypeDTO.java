package com.example.manage_book.dto;

import com.example.manage_book.model.Book;

import java.util.Set;

public class BookTypeDTO {
    private int id;
    private String bookTypeName;
    Set<Book> bookSet;

    public BookTypeDTO(int id, String bookTypeName, Set<Book> bookSet) {
        this.id = id;
        this.bookTypeName = bookTypeName;
        this.bookSet = bookSet;
    }

    public BookTypeDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBookTypeName() {
        return bookTypeName;
    }

    public void setBookTypeName(String bookTypeName) {
        this.bookTypeName = bookTypeName;
    }

    public Set<Book> getBookSet() {
        return bookSet;
    }

    public void setBookSet(Set<Book> bookSet) {
        this.bookSet = bookSet;
    }
}

