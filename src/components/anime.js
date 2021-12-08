import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAnime } from '../actions/animeActions';



const Anime = (props) => {
    const { id } = useParams();
    const { animePick } = props;
    console.log('anime',animePick)

    useEffect(() => {
        props.getAnime(id);
    },[])

    if(props.error){
        return (<h2>Can't Handle All The Weeb</h2>)
    }
    if(props.isFetching){
        return(<h2>Getting Anime Facts!</h2>)
    }

    return(
        <div className='animeFacts'>
            <div>
            <h2>{id.toUpperCase().replace(/_/g," ")}</h2>
            <img className="animeImg"src={props.animeImg} />
            </div>
            
            <div className="info">
            {
                animePick.map(anime => {
                    return (<p key={anime.fact_id}>{`${anime.fact_id}: ${anime.fact}`}</p>)
                })
            }
            </div>
        </div>
    )    

}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {    
        animePick:state.animePick,
        animeImg:state.animeImg,
        isFetching:state.isFetching,
        error:state.error
    }
}

export default connect(mapStateToProps, { getAnime })(Anime);