import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from "../firebase";

function Detail() {
    const  {id}  = useParams();
    const [movie, setMovie] = useState();
     console.log(id);

     useEffect(() =>{
          // grab the movie info from db
          db.collection("movies")
          .doc(id)
          .get()
          .then((doc) =>{
              if(doc.exists){
                 setMovie(doc.data());   // save the moviedata
            }else {
                //redirect to home page
            }
          })
          
     }, [])

    //   console.log("Movie on Detail page is  :", movie);

    return (
        <Container>
        {movie &&  (
         <>
          <Background>
              <img src={movie.backgroundImg}/>
          </Background>
          <ImageTitle>
              <img src={movie.titleImg}/>
           
          </ImageTitle>

          <Controls>
               <PlayButton>
                      <img src='/images/play-icon-black.png' alt='play'/>
                      <span>PLAY</span>
               </PlayButton>
               <TrailerButton>
                     <img src='/images/play-icon-white.png' alt='play'/>
                     <span>Trailer</span>
               </TrailerButton>
               <AddButton>
                     <span>+</span>
               </AddButton>
               <GroupWatchButton>
                     <img src='/images/group-icon.png' alt='group'/>
               </GroupWatchButton>
          </Controls>
          <Subtitle>
              {movie.subtitle}
          </Subtitle>
          <Description>
          {movie.description}
          </Description>
        </>
         )
         }
        </Container>
    )
}

export default Detail

const Container = styled.div`
     min-height: calc(100vh - 70px);
     width: 0 calc(3.9vw + 5px);
     position: relative;
     padding: 50px;
`

const Background = styled.div`
      position: fixed;      // relative to parent
      top: 0;
      right: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      opacity: 0.8;

      img {
          width: 100%;
        height: 100%;
        object-fit: cover;
      }
`

const ImageTitle = styled.div`
     height: 30vh;
     min-height: 170px;
     width: 35vw;
     min-width: 200px;
     margin-top: 40px;
     img{
         width: 100%;
         height: 100%;
         object-fit: contain;
     }
`

const Controls = styled.div`
   display: flex;
   align-items: center;
`

const PlayButton = styled.button`
     border-radius:4px;
     font-size: 15px;
     display: flex;
     align-items: center;
     height: 56px;
     background-color: rgb(249, 249, 249);
     border: none;
     padding: 0 24px;
     margin-right: 22px;
     letter-spacing: 1.8px;
     cursor: pointer;

     &:hover {
         background: rgb(198, 198, 198);
     }
`

const TrailerButton = styled(PlayButton)`
       background: rgba(0, 0, 0, 0.3);
       border: 1px solid rgb(249, 249, 249);
       color:rgb(249, 249, 249);
       text-transform: uppercase;
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    span {
        font-size: 30px;
        color: white;
        cursor:pointer;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 14px;
  min-height: 20px;
  margin-top: 26px;
    
`

const Description  = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 50%;

`