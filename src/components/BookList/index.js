import React, { useState, useEffect } from 'react'
import { doc, setDoc, collection, getCountFromServer, query, documentId, where } from 'firebase/firestore'
import { db } from '../../utils/firestore'
import { useUserAuth } from "../../context/userAuthContext"

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCheck as faTick } from '@fortawesome/free-solid-svg-icons'

// Import Framer Motion
import { motion } from "framer-motion"

import bookImg from '../../assets/images/book.png'

import { log } from '../../utils/logger'

import './style.css'

const BookList = ({ item, libraryDisplay = false }) => {

    log('[BookList] item - ', item)

    const { id, volumeInfo: { title, imageLinks, authors, publishedDate, industryIdentifiers, infoLink } } = item;

    const [inLibrary, setinLibrary] = useState()
    const [inWishList, setinWishList] = useState()
    const [hasRead, sethasRead] = useState()

    const { user } = useUserAuth()
    const { user: { uid } } = user;

    const checkBook = async () => {
        log('[Book] uid - ', uid)
        const booksRef = collection(db, 'library', uid, 'books')
        const q = query(booksRef, where(documentId(), '==', id))
        const snapshot = await getCountFromServer(q)
        const count = snapshot.data().count
        log('[Book] count - ', count)
        if (count > 0) {
            setinLibrary(true)
        } else {
            setinLibrary(false)
        }
    }

    useEffect(() => {
        checkBook();
    }, [checkBook, item])

    const addToLibrary = async (item) => {
        try {
            log('[Book] addToLibrary - ', item, uid, id)
            await setDoc(doc(db, 'library', uid, 'books', id), {
                id,
                item
            })
            setinLibrary(true)
        } catch (err) {
            console.error('Error adding book - ', err)
        }
    }

    const addToWishList = async (item) => {
        // TBC
    }

    const getISBN = (industryIdentifiers) => {
        log('industryIdentifiers - ', industryIdentifiers)
        if (industryIdentifiers) {
            log("Found identifiers");
            let hasISBN13 = industryIdentifiers.find(id => id.type === "ISBN_13");
            let hasISBN10 = industryIdentifiers.find(id => id.type === "ISBN_10");
            log('ISBNs', hasISBN13, hasISBN10);
            if (hasISBN13 && hasISBN13.identifier) { log(hasISBN13); return hasISBN13.identifier; }
            else if (hasISBN10 && hasISBN10.identifier) { log(hasISBN10); return hasISBN10.identifier; }
            else return "ISBN 0000000000";
        }
        else return null;
    }

    return (
        <Card className="card-book-list">
            <Card.Title className="line-clamp">{title}</Card.Title>
            <Card.Img className="card-book-img rounded mx-auto d-flex" variant="top" src={imageLinks !== undefined && imageLinks.thumbnail ? imageLinks.thumbnail : { bookImg }} alt={title} />
            <Card.Body className="card-book-body">
                <Card.Text>
                    {authors && (authors.length > 1 ? (<p><strong>Authors: </strong>{authors.join(', ')}</p>) : (<p><strong>Author: </strong>{authors.join()}</p>))}
                    <p><strong>Published Date: </strong>{publishedDate}</p>
                    <p><strong>ISBN: </strong>{getISBN(industryIdentifiers)}</p>
                </Card.Text>
            </Card.Body>
            <div className="card-book-selectors">
                <div className="fa-layers fa-fw" onClick={() => addToLibrary(item)}>
                    {!libraryDisplay && (
                        inLibrary ?
                            (
                                <>
                                    <FontAwesomeIcon icon={faBookmark} className="fa-3x bookmarkIcon" />
                                    <FontAwesomeIcon icon={faTick} className="fa-2x tickCrossIcon1" />
                                </>
                            )
                            :
                            (
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Add to my book nook</Tooltip>}>
                                        <FontAwesomeIcon icon={faBookmark} className="fa-3x bookmarkIcon" />
                                    </OverlayTrigger>
                                </motion.div>
                            )
                    )}
                </div>
                <div className="fa-layers fa-fw" onClick={() => addToWishList(item)}>
                    {!libraryDisplay && (
                        inWishList ?
                            (
                                <>
                                    <FontAwesomeIcon icon={faHeart} className="fa-3x heartIcon" />
                                    <FontAwesomeIcon icon={faTick} className="fa-2x tickCrossIcon2" />
                                </>
                            )
                            :
                            (
                                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                    <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Add to my wishlist</Tooltip>}>
                                        <FontAwesomeIcon icon={faHeart} className="fa-3x heartIcon" />
                                    </OverlayTrigger>
                                </motion.div>
                            )
                    )}
                </div>
            </div>
            <Button variant="outline-dark" text="white" key={id} href={infoLink} target="_blank" rel="noopener">More information</Button>
        </Card>
    )

}

export default BookList
