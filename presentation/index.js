// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  S,
  Image,
  BlockQuote,
  Quote,
  Cite,
  CodePane,
  Layout,
  Fill,
  Appear
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  wasmLogo: require("../assets/WebAssembly_Logo.png"),
  compile: require("../assets/compile.png"),
  hot: require("../assets/hot.jpg"),
  stack: require("../assets/stack.jpg"),
  heap: require("../assets/heap.gif"),
  joinme: require("../assets/jm.svg"),
  lmi: require("../assets/lmi.svg"),
  android: require("../assets/android.svg"),
  emscripten: require("../assets/emscripten.png"),
  heart: require("../assets/heart.png"),
  win: require("../assets/win.png"),
  ios: require("../assets/ios.png"),
  html5: require("../assets/html5.png"),
  fast: require("../assets/fast.jpg"),
  slow: require("../assets/slow.jpg"),
  corruption: require("../assets/corruption.jpg"),
  mac: require("../assets/mac.gif"),
  first: require("../assets/first.png"),
  last: require("../assets/last.png")
};

preloader(images);

const theme = createTheme({
  bg: "#dddddd",
  regular: "#60b200",
  highlight: "#ef6a00",
  plain: "#222222",
  white: "#fff"
}, {
  primary: "Rubik",
  secondary: "Helvetica"
});
const colors = theme.screen.colors;

export default class Presentation extends React.Component {
  render() {
    return (
    <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="white">
        <img src={images.first} height="100%" style={{ height: "90vh" }}/>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["zoom"]} bgColor="bg">
        <Heading size={1} fit caps lineHeight={1} textColor="highlight">
          WebAssembly
        </Heading>
        <Text margin="10px 0 0" textColor="regular" size={1} fit bold>
          Beyond the hype
        </Text>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["zoom"]} bgColor="highlight">
        <Image src={images.lmi} width="100%" />
        <Heading size={2} lineHeight={1} textColor="white">
          @BenedekGagyi
        </Heading>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular" margin=" 0 0 30px">
          <S type="" style={{ color: colors.regular }}>The state of the</S>
          <S type="" style={{ color: colors.highlight }}> web </S>
          <S type="" style={{ color: colors.regular }}> in 2017</S>
        </Heading>
        <Layout>
          <Fill>
            <Heading size={5} textColor="white" bgColor="regular" margin="10px" padding="0 10px" lineHeight="2em">
              JavaScript<br />Monopoly
            </Heading>
          </Fill>
          <Fill>
            <Heading size={5} textColor="white" bgColor="regular" margin="10px" padding="0 10px" lineHeight="4em">
              HW APIs
            </Heading>
          </Fill>
        </Layout>
        <Appear>
          <Heading size={5} textColor="white" bgColor="highlight" margin="10px" padding="0 10px" lineHeight="2em">
            Disappointing performance
          </Heading>
        </Appear>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular" margin=" 0 0 30px">
          <S type="" style={{ color: colors.regular }}>JS</S>
          <S type="" style={{ color: colors.highlight }}> performance:</S>
          <S type="" style={{ color: colors.regular }}> why does it suck?</S>
        </Heading>
        <List type="A" textColor="regular">
          <ListItem>simplicity above everything else</ListItem>
          <ListItem>dynamic, weakly typed</ListItem>
          <ListItem>garbage collector</ListItem>
          <ListItem>2008: just-in-time (JIT) compiling</ListItem>
        </List>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          <S type="" style={{ color: colors.regular }}>A significant step:</S>
          <S type="" style={{ color: colors.highlight }}> asm</S>
          <S type="" style={{ color: colors.regular }}>.js</S>
        </Heading>
        <List type="A" textColor="regular">
          <ListItem>2013, Mozilla</ListItem>
          <ListItem>a subset of JS</ListItem>
          <ListItem>double vs. int 32</ListItem>
          <ListItem>x = y | 0;</ListItem>
          <ListItem>
            a compile target (
            <S type="" style={{ color: colors.highlight }}>?</S>
            )
          </ListItem>
        </List>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg" margin=" 0 0 30px">
        <Heading size={4} textColor="regular">
          <S type="" style={{ color: colors.highlight }}>Web</S>
          <S type="" style={{ color: colors.regular }}>Assembly</S>
        </Heading>
        <List type="A" textColor="regular">
          <ListItem>WASM</ListItem>
          <ListItem>announced on 17 June 2015</ListItem>
          <ListItem>open standard: developed by W3C</ListItem>
          <ListItem>all the mayor players are behind it</ListItem>
          <ListItem>15 March 2016: MVP is demonstrated</ListItem>
        </List>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={1} textColor="regular">What is</Heading>
        <Image display="block" height="300" src={images.wasmLogo} />
        <Heading size={1} textColor="regular">?</Heading>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          It's a
          <S type="" style={{ color: colors.highlight }}> binary </S>
          executable format
        </Heading>
        <CodePane
          lang="binary"
          source={require("raw-loader!../assets/add.wasm")}
          style={{ overflow: "auto", height: "65vh" }}
        />
      </Slide>
      {/* ************************************  7  ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          It has a
          <S type="" style={{ color: colors.highlight }}> text </S>
          representation
        </Heading>
        <CodePane
          lang="lisp"
          source={require("raw-loader!../assets/add.wast")}
          style={{ overflow: "auto", height: "75vh" }}
          textSize="2.7vh"
        />
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">Source written in C</Heading>
        <CodePane
          lang="C-like"
          source={require("raw-loader!../assets/add.c")}
          style={{ overflow: "auto", height: "75vh" }}
          textSize="7vh"
        />
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular" margin=" 0 0 30px">
          It's a compile
          <S type="" style={{ color: colors.highlight }}> target</S>
        </Heading>
        <Image display="block" height="500" src={images.compile} />
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular" margin=" 0 0 30px">
          asm.js
          <S type="" style={{ color: colors.highlight }}> vs. </S>
          WebAssembly
        </Heading>
        <Text textSize="2rem" bgColor="regular" textColor="white" padding="5px">equivalent (for now, to support polyfilling)</Text>
        <Layout>
          <Fill>
            <List textColor="highlight" margin={10} >
              <ListItem textSize="2rem">pushed by Mozilla</ListItem>
              <ListItem textSize="2rem">minify, zip / unzip</ListItem>
              <ListItem textSize="2rem">warm-up time</ListItem>
              <ListItem textSize="2rem">garbage collection</ListItem>
              <br />
              <ListItem textSize="2rem">limited to JS operations</ListItem>
              <br />
              <ListItem textSize="2rem">non-typical compile target</ListItem>
            </List>
          </Fill>
          <Fill>
            <List textColor="regular" margin={10}>
              <ListItem textSize="2rem">backed by all major players</ListItem>
              <ListItem textSize="2rem">inherently compressed</ListItem>
              <ListItem textSize="2rem">consistent performance</ListItem>
              <ListItem textSize="2rem">manual memory management</ListItem>
              <ListItem textSize="2rem">CPU features (i64, popcount etc.)</ListItem>
              <ListItem textSize="2rem">WASM specific compiler optimizations (Binaryen)</ListItem>
            </List>
          </Fill>
        </Layout>
        <Text textSize="2rem" bgColor="regular" textColor="white" padding="5px">no interpretation step</Text>
        <Text textSize="2rem" bgColor="regular" textColor="white" padding="5px">can access DOM and other browser APIs</Text>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg" bgImage={images.slow}/>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg" bgImage={images.fast} />
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <BlockQuote>
          <Quote textSize={75} textColor="regular">
            WebAssembly is a way to run programming languages
            <S type="" style={{ color: colors.highlight }}> other </S>
            than JavaScript on web pages.
          </Quote>
          <Cite textSize={50} textColor="highlight">Lin Clark</Cite>
        </BlockQuote>
      </Slide>
      {/* ************************************    ************************************ */}
       <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          How will
          <S type="" style={{ color: colors.highlight }}> WASM </S>
          help us?
        </Heading>
        <Heading size={5} bgColor="regular" textColor="white" lineHeight="1.5em" padding="10px" margin="10px">Performance</Heading>
        <Heading size={5} bgColor="regular" textColor="white" lineHeight="1.5em" padding="10px" margin="10px">No compromises</Heading>
        <Heading size={5} bgColor="regular" textColor="white" lineHeight="1.5em" padding="10px" margin="10px">More approachable languages</Heading>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          Rust
        </Heading>
        <List type="A" textColor="regular">
          <ListItem>
            it's a
            <S type="" style={{ color: colors.highlight }}> modern </S>
            language
          </ListItem>
          <ListItem>friendly learning curve</ListItem>
          <ListItem>super safe: no memory corruptions/null pointers</ListItem>
          <ListItem>built with cross-platform in mind</ListItem>
          <ListItem>built in unit testing support</ListItem>
          <ListItem>great tooling (Cargo)</ListItem>
        </List>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={1} textColor="regular">
          DEMO
        </Heading>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={2} textColor="regular">
          Stack
        </Heading>
        <Heading size={5} textColor="regular">
          vs
        </Heading>
        <Heading size={2} textColor="highlight">
          Heap
        </Heading>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg" bgImage={images.stack} align="flex-end flex-end" styleClass="noFluff" />
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg" bgImage={images.heap} align="flex-end flex-end" styleClass="noFluff" />
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          Communication hiccups
        </Heading>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg" bgImage={images.corruption} align="flex-end flex-end" styleClass="noFluff" />
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          AssemblyScript
        </Heading>
        <Appear>
          <Heading size={1} textColor="regular">
            DEMO
          </Heading>
        </Appear>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          Summary
        </Heading>
        <List type="A" textColor="regular">
          <ListItem>WebAssembly is here to stay...</ListItem>
          <ListItem>...and so is JavaScript</ListItem>
          <ListItem>Emscripten is the king</ListItem>
          <ListItem>binaryen (asm2wasm)</ListItem>
          <ListItem>webassembly, assemblyscript, turboscript</ListItem>
        </List>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <BlockQuote>
          <Quote textSize={75} textColor="highlight">
            <S type="" style={{ color: colors.regular }}>Always bet on JavaScript</S>
            <Appear><span> and WASM</span></Appear>
          </Quote>
          <Cite textSize={50} textColor="highlight">Brendan Eich</Cite>
        </BlockQuote>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["zoom"]} bgColor="bg">
        <Heading size={1} fit caps lineHeight={1} textColor="highlight">
          Thank You!
        </Heading>
        <Text margin="10px 0 0" textColor="regular" size={1} fit bold>
          <S type="" style={{ color: colors.highlight }}>@</S>
          BenedekGagyi
        </Text>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="white">
        <img src={images.last} height="100%" style={{ height: "90vh" }}/>
      </Slide>
      {/* ************************************  END  ************************************ */}
    </Deck>
    );
  }
}
