import React, { useState, useEffect } from 'react'
import { collection, getDocs }  from 'firebase/firestore'
import { db } from '../../utils/firestore'
import { useUserAuth } from "../../context/userAuthContext"
import 'holderjs'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Book from '../../components/BookList'

import { log } from '../../utils/logger'

import './style.css'

const Library = () => {

  const [books, setBooks] = useState()

  const { user } = useUserAuth()
  const { user: { uid } } = user;

  const fetchBooks = async () => {
    log('[Library] fetchBooks')
    const collectionRef = collection(db, 'library', uid, 'books')

    const booksSnapshot = await getDocs(collectionRef)
    let items = [];
    if (booksSnapshot.docs.length > 0) {
      booksSnapshot.forEach((doc) => {
        log('[Library] booksRef - doc ', doc.id, doc.data())
        items.push(doc.data().item)
      })
    }

    setBooks({ items: items });
    log('[Library] books - ', books)
  }

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  log('[Library] books - ', books)

  return (
    <div className="App-library">
      <div >
        <h1>BookTok</h1>
        <p className="firstLibraryText">Want to know what books your already own at home? Or find the books you want to add to your collection?<br />
          Your BookTok library easily allows you to view the books you have; those you desire and those that you have read.</p>
        <div className="App-library-book-list">
          <Row xs={1} md={4} className="g-0">
            {books && books.items.map((item, index) => {
              return (
                <Col key={index}>
                  <Book item={item} libraryDisplay={true} />
                </Col>
              )
            })}
          </Row>
  </div>
    </div>
    </div>
  );
}

export default Library;