import React from "react";
import DoneAnimation from '../lottie/done.json';
import { useLottie } from 'lottie-react';
import logo from '../images/logo.png'
import { Button, Typography, Link } from "@mui/material";


const HomeView = () => {
    const options = {
        animationData: DoneAnimation,
        loop: true,
        autoplay: true,
        rendererSettings: {

        }
      };
    
      const { View } = useLottie(options);

      return(
          <>
          <div>
            <img src={logo} alt="logo"></img>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{width:'50%'}}>
                {View}
              </div>
              <div style={{width:'50%', margin:'auto', flexDirection:"column"}}>
                <div>
                    <Typography variant="h3">Prepare to</Typography>
                    <Typography variant="h1">Leben in Deutschland</Typography>
                    <Button variant="contained" size="large" style={{marginTop:"24px", marginBottom: "16px"}}>Start</Button>
                    <Typography variant='h6'>5 from ‘All Questions’</Typography>
                </div>
                <div>
                    <Typography variant="h5" style={{marginTop:"24px"}}>OR SELECT A QUESTION SET </Typography>
                    <Link className='quizSet' href="#" color="inherit">Berlin</Link>
                    <Link className='quizSet' href="#" color="inherit">Bayern</Link>
                    <Link className='quizSet' href="#" color="inherit">NRW</Link>
                    <Link className='quizSet' href="#" color="inherit">Saxony</Link>
                </div>
              </div>
             
            
          </div>
          </>
      )
}


export default HomeView;