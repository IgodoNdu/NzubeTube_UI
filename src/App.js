//creating the first styled component
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

import { darkTheme, lightTheme } from "./utils/Theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
//for page routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import the pages as needed
import Home from "./pages/Home";
import Video from "./pages/Video";
import Signin from "./pages/Signin";

//for our css properties
const Container = styled.div`
display: flex;
`
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`
const Wrapper = styled.div`
  padding: 22px 96px;
`

function App() {
  //for theme swap
  const [darkMode, setDarkMode] = useState(true)

  return (
    //for theme provider: flipping dart->mode: use the Style Component ThemeProvider
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          {/** menu */}
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          {/** main */}
          <Main>
            <Navbar />
            {/**Content Area (Wrapper): Consists of all the video cards */}
            <Wrapper>
              <Routes>
                <Route path="/"> 
                  <Route path="/" element={<Home />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
