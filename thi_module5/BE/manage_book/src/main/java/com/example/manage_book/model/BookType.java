package com.example.manage_book.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class BookType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String bookTypeName;
    @JsonManagedReference
    @OneToMany(mappedBy = "bookType")
    Set<Book> bookSet;

    public BookType(int id, String bookTypeName, Set<Book> bookSet) {
        this.id = id;
        this.bookTypeName = bookTypeName;
        this.bookSet = bookSet;
    }

    public BookType() {
    }

    public BookType(int id) {
        this.id = id;
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
