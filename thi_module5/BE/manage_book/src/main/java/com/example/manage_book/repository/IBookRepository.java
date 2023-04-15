package com.example.manage_book.repository;

import com.example.manage_book.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IBookRepository extends JpaRepository<Book, Integer> {
    @Query(value = "select * from book where name like concat('%',:name,'%')", nativeQuery = true)
    Page<Book> findByName(String name ,Pageable pageable);

    @Query(value = "select * from book where id=:id", nativeQuery = true)
    Book findById(@Param("id") int id);

    @Query(value = "delete from book where id=:id",nativeQuery = true)
    Integer deleteBook(@Param("id")int id);

}
