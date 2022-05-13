import React from "react";
import { PALETTE, HEADER_HEIGHT } from "./constants";
import { Stack, Text } from "@fluentui/react";
import {
  withRouter,
  RouteComponentProps,
  Link as RouterLink,
} from "react-router-dom";

const vertPadding = 15;
const horizPadding = 25;

interface IHeaderProps extends RouteComponentProps {}
interface IHeaderState {
  currLink: string;
}

class HeaderComponent extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps, state: IHeaderState) {
    super(props, state);

    this.state = {
      currLink: "",
    };
  }

  componentDidMount() {
    const updateLink = (path: string) => {
      const link = path.substring(path.lastIndexOf("/") + 1);
      this.setState({ currLink: link });
    };

    updateLink(window.location.pathname);

    this.props.history.listen((location) => {
      updateLink(location.pathname);
    });
  }

  render() {
    return (
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{ childrenGap: 30 }}
        styles={{
          root: {
            height: HEADER_HEIGHT,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            background: PALETTE.header,
            paddingLeft: horizPadding,
            paddingRight: horizPadding,
            paddingTop: vertPadding,
            paddingBottom: vertPadding,
            // boxShadow: "0rem 2rem 3rem rgb(0 0 0 / 80%)",
            boxShadow: "1px 1px 3.2px rgb(0 0 0 / 50%)",
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
          },
        }}
      >
        {this.logo()}
        {this.link("Home", "")}
        {this.link("Experience")}
        {this.link("Projects")}
        {this.link("Education")}
      </Stack>
    );
  }

  logo() {
    const height = HEADER_HEIGHT - 2 * vertPadding;
    return (
      <svg width={height} height={height} viewBox="0 0 100 100">
        <defs>
          <pattern
            id="bg"
            height="100%"
            width="100%"
            patternContentUnits="objectBoundingBox"
          >
            <image
              height="1"
              width="1"
              preserveAspectRatio="none"
              href="images/green-tri.png"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="20" height="100" fill={PALETTE.accent}></rect>
        {/* <polygon points="0,0 25,0 20,100 0,100" fill="url(#bg)"></polygon> */}
        <polygon points="20,25 45,0 70,0 20,50" fill="url(#bg)"></polygon>
        <polygon points="20,40 70,100 45,100 20,65" fill="url(#bg)"></polygon>
        <rect x="98" y="0" width="2" height="100" fill={PALETTE.accent}></rect>
      </svg>
    );
  }

  link(text: string, url = text.toLowerCase()) {
    const { currLink } = this.state;
    const className = currLink === url ? "linkCurrent" : "link";
    return (
      <RouterLink className={className} to={`/portfolio/${url}`}>
        <Text
          className={className}
          styles={{
            root: {
              fontSize: 17,
              fontWeight: 600,
            },
          }}
        >
          {text.toUpperCase()}
        </Text>
      </RouterLink>
    );
  }
}

export const Header = withRouter(HeaderComponent);
