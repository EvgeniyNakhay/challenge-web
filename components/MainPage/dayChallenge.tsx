import { Box, Typography } from "@mui/material"
import styles from "./../NavBar/styles/NavBar.module.css";

export default function DayChallenge() {

  // значение изменяемое с каждым днем, после надо вводить проверку
  //чтобы значение не превышало дни челленджа пользователя
  let countDayChallenge = 4;

  function createContentDayChallnge(){
    let data = new Date().getDate();
    let arrayDay = [];
    
    for(let i = 0; i < countDayChallenge; i++){
      arrayDay.push(data - i);
    }
    // console.log(arrayDay);
    return arrayDay;
  }

  function itemDay(createContentDayChallnge){
    let arr = createContentDayChallnge();
    let newArray = [];
    arr.forEach((el) => {
      el === new Date().getDate() ? (el = 'СЕГОДНЯ', newArray.push(el)) :
      el === new Date().getDate()-1 ? (el = 'BЧЕРА', newArray.push(el)) : newArray.push(el);
    })
    console.log(newArray);
    // console.log(arr)
    return newArray;
  }
  
  return(
    // <>{itemDay(createContentDayChallnge)}</>

    <Box sx={{
      p: '24px 16px',
      backgroundColor: 'pink',
    }}>
      {itemDay(createContentDayChallnge).map((el) => {
        <Box sx={{
          p: '10px 0',
          backgroundColor: 'red',
        }}>
          {el}
        </Box>
      })}
    </Box>


    // <Box sx={{

    // }}>
    //   {itemDay(createContentDayChallnge).forEach((day) => {
    //     <Box key={day} sx={{

    //     }}>
    //       {day}
    //     </Box>
    //   })}
    // </Box>
  );
}
