package com.example.manage_book.dto;

import com.example.manage_book.model.BookType;

import javax.validation.constraints.NotBlank;

public class BookDTO {
    private int id;
    @NotBlank
    private String idBook;
    @NotBlank
    private String name;
    @NotBlank
    private String dayStart;
    @NotBlank
    private String quantity;
    @NotBlank
    private BookType bookType;

    public BookDTO() {
    }

    public BookDTO(int id, String idBook, String name, String dayStart, String quantity, BookType bookType) {
        this.id = id;
        this.idBook = idBook;
        this.name = name;
        this.dayStart = dayStart;
        this.quantity = quantity;
        this.bookType = bookType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getIdBook() {
        return idBook;
    }

    public void setIdBook(String idBook) {
        this.idBook = idBook;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDayStart() {
        return dayStart;
    }

    public void setDayStart(String dayStart) {
        this.dayStart = dayStart;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public BookType getBookType() {
        return bookType;
    }

    public void setBookType(BookType bookType) {
        this.bookType = bookType;
    }
}
