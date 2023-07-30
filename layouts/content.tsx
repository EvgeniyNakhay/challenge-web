import { Grid, Container, Typography, Link } from "@mui/material";
import React from "react";
import { Layouts } from "@/types/Layouts";
import { Navbar } from "@/components/NavBar/navbar";
import BoxAuthorizationUI from "@/UI/BoxAuthorizationUI";
import AuthorizationInputUI from "@/UI/AuthorizationInputUI";
import AuthorizationButtonBlueUI from "@/UI/AuthorizationButtonBlueUI";

const Content: React.FC<Layouts> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container justifyContent="center">
          <BoxAuthorizationUI>
            <>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  fontSize: "32px",
                }}
              >
                Регистрация
              </Typography>
              <Grid container mt={1} mb={2}>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={6}>
                    <AuthorizationInputUI
                      type={"text"}
                      placeholder={"Введите имя"}
                      label={"Имя"}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <AuthorizationInputUI
                      type={"text"}
                      placeholder={"Введите фамилию"}
                      label={"Фамилия"}
                    />
                  </Grid>
                </Grid>
                <AuthorizationInputUI
                  type={"email"}
                  placeholder={"Введите почту"}
                  label={"E-mail"}
                />
                <AuthorizationInputUI
                  type={"password"}
                  placeholder={"Придумайте пароль"}
                  label={"Пароль"}
                />
                <AuthorizationInputUI
                  type={"password"}
                  placeholder={"Подтвердите пароль"}
                  label={"Подтверждение пароля"}
                />
              </Grid>
              <Grid spacing={2} maxWidth="318px" width="100%" margin="auto">
                <AuthorizationButtonBlueUI
                  text={"Зарегистрироваться"}
                  url={""}
                />
                <Typography
                  mt={1}
                  paddingX={1}
                  sx={{
                    maxWidth: "318px",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  Нажимая кнопку «Зарегистрироваться», вы соглашаетесь с
                  <Link px={0.5} href="#" underline="hover">
                    Правилами сайта
                  </Link>
                  и даете согласие на обработку персональных данных
                </Typography>
              </Grid>
            </>
          </BoxAuthorizationUI>
        </Grid>
      </Container>
    </>
  );
};

export default Content;
