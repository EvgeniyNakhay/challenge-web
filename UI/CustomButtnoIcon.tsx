import {Button, Grid, Typography} from "@mui/material";
import React from "react";
import {CustomButton} from "@/UI/typesUI/UI";

const CustomButtnoIcon: React.FC<CustomButton> = ({icon, text}) => {
  return <Grid ml={3}>
      <Button>
          <Grid container mb={-.9}>
              <Grid mt={-.5}>
                  {icon}
              </Grid>
              <Grid>
                  <Typography sx={{
                      color: '#565EDB',
                      fontSize: '1em'
                  }}>
                      {text}
                  </Typography>
              </Grid>
          </Grid>
      </Button>
  </Grid>
}

export default CustomButtnoIcon