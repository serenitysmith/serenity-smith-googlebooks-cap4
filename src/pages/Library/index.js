// Importing React module
import React from 'react';
// Importing the associated CSS file for styling
import './style.css';

// Defining the functional component Library
function Library() {
  // JSX structure for rendering the component
  return (
    <div className="App-library">
      {/* Container for the header section */}
      <div>
        {/* Heading for the library page */}
        <h1>BookTok</h1>
        {/* Paragraph with introductory text */}
        <p className="firstLibraryText">
          Your personal bookshelf is here..<br />
          Your BookTok library easily allows you to view the books you have; those you desire and those that you have read.
        </p>
      </div>

      {/* Empty div placeholder (not sure if it's intended for something specific) */}
      <div></div>

      {/* Footer section (not provided in the code, might be missing or intended to be added later) */}
      {/* You may add the footer content here or include a separate Footer component */}
    </div>
  );
}

// Exporting the Library component as the default export
export default Library;
