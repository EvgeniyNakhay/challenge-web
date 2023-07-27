import {Button, Grid, Typography} from "@mui/material";
import {PlusIcon} from "@/UI/CastomIcon";

const CustomButtnoIcon = () => {
  return <Grid ml={3}>
      <Button>
          <Grid container mb={-.9}>
              <Grid mt={-.5}>
                  <PlusIcon/>
              </Grid>
              <Grid>
                  <Typography sx={{
                      color: '#565EDB',
                      fontSize: '1em'
                  }}>
                      Добавить день
                  </Typography>
              </Grid>
          </Grid>
      </Button>
  </Grid>
}

export default CustomButtnoIcon