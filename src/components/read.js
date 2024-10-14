import React, { useState, useEffect } from 'react'; // Import React and hooks
import axios from 'axios'; // Import axios
import Movies from './movies'; // Import the Movies component

const Read = () => { // Define the Read functional component
    const [movieData, setMovies] = useState([]); // State for movie data

    useEffect(() => {
        // Function to fetch movie data
        const fetchMovies = () => {
            axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872') // API endpoint
                .then(response => {
                    setMovies(response.data.movies); // Update state with fetched data
                })
                .catch(error => {
                    console.error("Error fetching movie data:", error); // Handle any errors
                });
        };

        fetchMovies(); // Call the function to fetch movies when the component mounts
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <div> {/* Main container for the component */}
            <h1>Movie List</h1> {/* Heading for the movie list */}
            <Movies movies={movieData} /> {/* Pass movieData to the Movies component as props */}
        </div>
    );
};

export default Read; // Export the Read component for use in other files
