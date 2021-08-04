// import React from 'react'
// import { Button } from 'semantic-ui-react'
// import DialogModal from "./components/modals/DialogModal"
// import { useBaseModal } from './Hook/useBaseModal'
// // import "./App.css";


// function App() {

//   const handleClick =()=>{
//     alert(123)
//   }

//   const infoModal =  useBaseModal()

//   return (
//     <>
//           <DialogModal
//            isOpen={infoModal.isOpen}
//            onClose={infoModal.close}
//           />
//            {/* <Button onClick={infoModal.open} className='start'>Click Here</Button> */}
//     </>
//   )
// }

// export default App




// export default function App() {
  // const [open, setOpen] = React.useSta(false);
  // const [value, setValue] = React.useState("Done");

  // const onClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = newValue => {
  //   setOpen(false);

  //   if (newValue) {
  //     setValue(newValue);
  //   }
  // };

//   return (
//     <div>
//       <Button secondary={value} onClick={onClick}>
//         Choose fruit
//       </Button>

//       <ConfirmationDialogRaw
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         value={value}
//       />
//     </div>
//   );
// }





import React, { useEffect, useState } from 'react'
import ConfirmationDialogRaw from './ConfirmationDialogRaw'
import Button from '@material-ui/core/Button';


function App() {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Done");

  const onClick = () => {
    setOpen(true);
  };

  const handleClose = newValue => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };



  return (
    <>
        <Button secondary={value} onClick={onClick}>
          Choose fruit
        </Button>

        <ConfirmationDialogRaw
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
        />

    </>
  )
}

export default App
