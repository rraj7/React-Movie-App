import './trending.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import SingleContent from '../../Components/SingleContent/SingleContent';
import CustomPaginaton from '../../Components/Pagination/CustomPagination';


const Trending = () => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();

    //API GET Method
    const fetchTrending = async () =>{
        //{ data } = Destructuring the data out of promise
        //TODO: Set the enviornment variable parameter. 
        const { data } = await axios.get(
        'https://api.themoviedb.org/3/trending/all/day?api_key=4d465ce54f5191b59819a512a804cf8e'
        );
        setContent(data.results);
        setNumOfPages(data.total_pages);
        
    };
    
    useEffect(() => {
        window.scroll (0,0)
        fetchTrending(); 
            // eslint-disable-next-line
      },[page]
    );
    
    return (
        <div>
            <span className = "pageTitle">Trending</span>
            <span className = 'trending'>
                {
                    content && content.map((e)=>(
                        
                        <SingleContent 
                            key = {e.id} 
                            id = {e.id} 
                            poster = {e.poster_path} 
                            title = {e.title || e.name}
                            original_language = {e.original_language}
                            date = {e.first_air_date || e.release_date}
                            media_type = {e.media_type}
                            vote_average = {e.vote_average}
                        />
                    ))
                }
            </span>
            <CustomPaginaton setPage = {setPage} numOfPages={numOfPages}/>
        </div>
    )
}

export default Trending;
