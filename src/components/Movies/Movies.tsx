import React, { useEffect, useState } from "react";

interface Videos {
    id: number;
    name: string;
    data: Uint8Array;
}

function MovieComponent() {
    const [popularMovies, setPopularMovies] = useState<Videos[]>([]);
    const [upcomingMovies, setUpcomingMovies] = useState<Videos[]>([]);
    const [latestMovies, setLatestMovies] = useState<Videos[]>([]);

   

   

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://178.62.212.197/api/video/')
            const data = await response.json();
            setLatestMovies(data);
        };
        fetchData();
    }, []);

    const handleMoviesClick = (id: number) => {

        const movie = latestMovies.find(m => m.id === id);
        if(!movie) return;

        const blob = new Blob([movie.data], {type: 'video/mp4'});
        const objectURL = URL.createObjectURL(blob);

        const video = document.createElement('video');
        video.src = objectURL;
        video.autoplay = true;
        video.controls = true;
        document.body.appendChild(video);

    };

    return ( 
        <div>
            <h1>Latest</h1>
            {latestMovies.slice(0, 10).map(movie => (
                <div key={movie.id} onClick={() => handleMoviesClick(movie.id)}>
                    {/* <img src={`endpoint${movie.poster_path}`} alt={movie.name} /> */}
                    <p>{movie.name}</p>
                    </div>
            ))}
            {/* <img src="https://www.imdb.com/title/tt9764362/mediaviewer/rm1001914881/?ref_=tt_ov_i" alt="imageTest" /> */}


            {/* <h1> Most Popular</h1>
            {popularMovies.slice(0,10).map(movie => (
                <div key={movie.id} onClick={() => handleMoviesClick(movie.id)}>
                    <img src={`endpoint${movie.poster_path}`} alt={movie.title} />
                    <p>{movie.title}</p>
                    </div>
            ))}
            <img src="" alt="" /> */}

        
            {/* <h1> Upcoming</h1>
            {upcomingMovies.slice(0, 10).map(movie => (
                <div key={movie.id} onClick={() => handleMoviesClick(movie.id)}>
                    <img src={`endpoint${movie.poster_path}`} alt={movie.title} />
                    <p>{movie.title}</p>
                    </div>
            ))}
            <img src="" alt="" /> */}
        </div>
    )
}

export default MovieComponent