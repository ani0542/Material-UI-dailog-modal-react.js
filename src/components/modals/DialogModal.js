import React, { useEffect, useState } from 'react'
import { Box, Typography, Dialog, TextField, Button } from "@material-ui/core";
import bg from "../../assets/bg.jpg"

function DialogModal({isOpen,onClose}) {


    const [showAd, setShowAd] = useState(false);

  const openAd = () => setShowAd(true);
  const closeAd = () => setShowAd(false);


    useEffect(()=>{
        const interval = setTimeout(openAd,3000)
        return ()=> {
            clearTimeout(interval)
        }
    },[])

    
    return (
        <>
                <Dialog open={openAd} onClose={closeAd}>
        <Box width="286px" p={2} textAlign="center">
          <img src={bg} width="100%" alt="bag photos" />
          <Typography style={{ fontWeight: 700, marginTop: 10 }}>
            Enter your phone number below and avail 10% off on your first order.
          </Typography>
          <Typography variant="caption" color="textSecondary">
            You will receive a discount code via SMS on your phone number
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter Full Name"
            fullWidth
            margin="dense"
          />
          <TextField
            variant="outlined"
            placeholder="10 digit phone number"
            fullWidth
            margin="dense"
          />
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </Dialog>
      <div className="App">
        <Box p={3} textAlign="center">
          <Typography variant="h1">Travel Laptop Backpack</Typography>
          <Typography variant="body1" style={{ margin: "20px 0" }}>
            Quisque pulvinar est posuere, consectetur nisl nec, efficitur dui.
            Fusce a mi dolor. Fusce et ornare nisi, et molestie sem. Cras
            sodales mi id egestas accumsan.
          </Typography>
        </Box>
        <div className="bg">s</div>
      </div>
        </>
    )
}

export default DialogModal
