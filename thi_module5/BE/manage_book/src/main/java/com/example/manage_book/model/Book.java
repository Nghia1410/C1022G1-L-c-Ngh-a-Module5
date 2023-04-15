package com.example.manage_book.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String idBook;
    private String name;
    private String dayStart;
    private String quantity;
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "book_type_Id", referencedColumnName = "id")
    private BookType bookType;

    public Book(int id, String idBook, String name, String dayStart, String quantity, BookType bookType) {
        this.id = id;
        this.idBook = idBook;
        this.name = name;
        this.dayStart = dayStart;
        this.quantity = quantity;
        this.bookType = bookType;
    }

    public Book() {
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
