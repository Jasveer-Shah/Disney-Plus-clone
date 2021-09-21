import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/movieSlice';  // bringing state
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'

function Movies() {
const movies = useSelector(selectMovies);
console.log("these are movies :1 2 3.... ", movies, "got it")


    return (
        <Container>
            <h4>Recomended for you</h4>
            <Content>
                {  movies &&
                     movies.map((movie) => (   // these braces renders the html element directly
                               <Wrap key={movie.id}>
                                   <Link to={`/detail/${movie.id}`}>
                                     <img src={movie.cardImg}/>
                                   </Link>
                                </Wrap>
                     )
                               )
                
                }

              
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

    `

const Content = styled.div`
    display:grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
   border-radius: 10px;
   overflow: hidden;
   cursor: pointer;
   border: 3px solid rgba(249, 249, 249, 0.1);
   box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
   &:hover{
      transform :scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
   }

`
