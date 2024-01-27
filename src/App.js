import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { Navbar } from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

const details = {
  pic: "https://yt3.ggpht.com/69uK0U3OYNsPdWUW7oZZ4SVx8jXxu7cEQNSkV3oEcEoO7dupTRhgsVWnD5K-pXGl0FOrBbYyFc8=s88-c-k-c0x00ffffff-no-rj",
  name: "John",
};

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* navbar */}
        <Navbar pic={details.pic} name={details.name} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add pic={details.pic} name={details.name} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
