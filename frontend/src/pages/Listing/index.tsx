
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieCard from 'components/MovieCard';
import Pagination from 'components/pagination';
import { BASE_URL } from 'utils/requests';
import './styles.css'
import { MoviePage } from 'types/movie';

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 0,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    }
    );

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
            .then(response => {
                const data = response.data as MoviePage;
                console.log(data);
                setPage(data);
            });
    }, [pageNumber]);


    return (
        <>
            <Pagination />

            <div className="porfavorfunciona">
                <div className="container">
                    <div className="row">
                        {page.content.map(movie => (
                            <div key={movie.id}className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCard movie={movie} />
                            </div>
                        )
                        )}

                    </div>

                </div>
            </div>

        </>
 

    );
}

export default Listing;