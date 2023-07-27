import LayoutCreate from "@/layouts/layoutCreate";
import {Button, Grid, Typography} from "@mui/material";
import BoxCreateUI from "@/UI/BoxCreateUI";
import InputUI from "@/UI/InputUI";
import {PlusIcon} from "@/UI/CastomIcon";
import CustomButtnoIcon from "@/UI/CustomButtnoIcon";


export default function Index(){
    return (
        <LayoutCreate>
            <BoxCreateUI>
                <InputUI
                    type={"text"}
                    placeholder={"Введите наименование"}
                    label={"Наименование челленджа"}/>
                <InputUI
                    multiline={true}
                    type={"text"}
                    placeholder={"Описание челленджа"}
                    label={"Описание челленджа..."}/>
              <Grid container xs={8}>
                  <InputUI
                      type={"date"}
                      placeholder={"Дата начала"}
                      label={"Выберите дату"}/>
                  <InputUI
                      type={"date"}
                      placeholder={"Дата окончания"}
                      label={"Выберите дату"}/>
              </Grid>
            </BoxCreateUI>
            <BoxCreateUI>
                <InputUI
                    type={"text"}
                    label={"День 1"}
                    placeholder={"Введите описание"}/>
                <CustomButtnoIcon/>
            </BoxCreateUI>
        </LayoutCreate>
    )
}