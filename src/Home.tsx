import * as React from "react";
import { Stack, Text } from "@fluentui/react";
import { Border } from "./Border";
import { Card } from "./Card";
import { PALETTE } from "./constants";

interface IHomeProps {}
interface IHomeState {
  section: string;
}

export class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps, state: IHomeState) {
    super(props, state);

    this.state = {
      section: "overview",
    };
  }

  render() {
    const { section } = this.state;
    return (
      <>
        <Stack
          horizontal
          // wrap
          horizontalAlign="space-between"
          verticalAlign="center"
          grow
          disableShrink
          styles={{
            root: {
              paddingLeft: 250,
              paddingRight: 40,
              // paddingTop: 40,
              position: "relative",
              width: "100%",
            },
          }}
          tokens={{ childrenGap: 0 }}
        >
          {/* <Card x="15vw" y="20vh" w="20vw" h="50vh" title="Compilers" />
          <Card x="50vw" y="15vh" w="20vw" h="45vh" title="Qt" filter="smoke">
            <Text className="text">Some words</Text>
          </Card>
          <Card x="80vw" y="25vh" w="20vw" h="45vh" title="Web">
            <Text className="text">Some words</Text>
          </Card> */}
          {/* {this.nav()} */}
          {/* {section == "overview" && this.overview()} */}
          {/* {section == "c++" && this.cpp()} */}
          {/* {this.card(0, -20)} */}
          {/* {this.card(0, 20)} */}
          {/* {this.card(0, 0)} */}
          {/* <Border w={w} h={h} />
          <img
            src="images/fancy.png"
            width={w}
            height={h}
            style={{ border: "1px solid red" }}
          /> */}
        </Stack>
      </>
    );
  }

  overview() {
    return (
      <>
        <Text>Overview contents go here</Text>
      </>
    );
  }

  cpp() {
    return (
      <>
        {/* <Card x="30vw" y="20vh" w="18vw" h="50vh" title="Checked C" />
        <Card x="55vw" y="15vh" w="20vw" h="45vh" title="Character Journeys">
          <Text className="text">Some words</Text>
        </Card>
        <Card x="80vw" y="25vh" w="20vw" h="45vh" title="Research">
          <Text className="text">Some words</Text>
        </Card> */}
      </>
    );
  }

  nav() {
    return (
      <Stack
        verticalAlign="center"
        styles={{
          root: {
            background: PALETTE.header,
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: "0.5rem",
            maxWidth: 250,
          },
        }}
      >
        {this.navSection("overview", [])}
        {this.navSection("C++", ["Clang/LLVM", "Qt", "OpenGL"])}
        {/* {this.navSection("desktop", ["C++", "Qt", "OpenGL"])} */}
        {this.navSection("web - frontend", ["TypeScript", "React", "Three.js"])}
        {this.navSection("web - backend", [
          "TypeScript",
          "Node.js",
          "Redis",
          "MongoDB",
          "Azure",
        ])}
      </Stack>
    );
  }

  navSection(title: string, skills: string[]) {
    const { section } = this.state;
    const className = section == title.toLowerCase() ? "emphasis" : "text";
    return (
      <Stack
        verticalAlign="center"
        tokens={{ childrenGap: 5 }}
        styles={{
          root: {
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            cursor: "pointer",
            selectors: { ":hover": { background: PALETTE.pale } },
          },
        }}
        onClick={() => this.setState({ section: title.toLowerCase() })}
      >
        <Text
          className={className}
          styles={{ root: { fontSize: 16, color: PALETTE.accent } }}
        >
          {title.toUpperCase()}
        </Text>
        {skills.length > 0 && (
          <Stack
            tokens={{ childrenGap: 10 }}
            horizontal
            wrap
            styles={{ root: { paddingLeft: 5 } }}
          >
            {skills.map((skill) => (
              <Text className="text">{skill}</Text>
            ))}
          </Stack>
        )}
      </Stack>
    );
  }

  card(x?: number, y?: number) {
    return (
      <Stack
        styles={{
          root: {
            background: PALETTE.header,
            borderRadius: "1em",
            height: "300px",
            width: "250px",
            transform: `translate(${x || 0}%, ${y || 0}%)`,
          },
        }}
      >
        <Border w="100%" h="30px" borderRadius="1em" />
      </Stack>
    );
  }
}
