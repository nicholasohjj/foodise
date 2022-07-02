import React, {useState} from "react";
import { Div, Image, Container, Icon, Anchor, scrollTo, Text } from "atomize"
import logo from "../../images/logo.png"
import { UserButton } from "@clerk/clerk-react/dist/components";

const ExplorerHeader = () => {
    const [showMobileHeaderMenu, setshowMobileHeaderMenu] = useState(false)

    const ToggleHeaderMenu = value => {
        setshowMobileHeaderMenu(value)
        setTimeout(() => {
          window.scrollTo(0, window.scrollY + 1)
        }, 400)
      }
    return (
        <>
        <Div
            tag="header"
            pos="fixed"
            top="0"
            transition
            left="0"
            right="0"
            zIndex="100"
            p={{ y: { xs: "1.5rem", md: "1rem" } }}
        >
            <Div
                pos="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="white"
                opacity="1"
                zIndex="-1"
          ></Div>
            <Container d="flex" align="center" justify="space-between">
            <Div cursor="pointer">

            <Anchor href="./">
              Back to Homepage
            </Anchor>
              
              
            
            </Div>
            

            {/* Icon For Mobile */}

            <Div
              d={{ xs: "flex", md: "none" }}
              flexDir="column"
              onClick={() => ToggleHeaderMenu(!showMobileHeaderMenu)}
            >
              <Div
                h="2px"
                w="1rem"
                bg="black"
                rounded="lg"
                style={{
                  transform: `translateY(${
                    showMobileHeaderMenu ? "1" : "-2"
                  }px)rotate(${showMobileHeaderMenu ? "135" : "0"}deg)`,
                }}
                transition
              ></Div>
              <Div
                h="2px"
                w="1rem"
                bg="black"
                rounded="lg"
                style={{
                  transform: `translateY(${
                    showMobileHeaderMenu ? "-1" : "2"
                  }px)rotate(${showMobileHeaderMenu ? "45" : "0"}deg)`,
                }}
                transition
              ></Div>
            </Div>

            {/* Links for Desktop */}
            <Div
              d="flex"
              onClick={() => ToggleHeaderMenu(false)}
              bg={{ xs: "white", md: "transparent" }}
              align={{ xs: "strech", md: "center" }}
              flexDir={{ xs: "column", md: "row" }}
              pos={{ xs: "absolute", md: "static" }}
              p={{
                t: { xs: "6rem", md: "0" },
                b: { xs: "2rem", md: "0" },
                x: { xs: "1.5rem", md: "0" },
              }}
              top="0"
              left="0"
              right="0"
              zIndex={{ xs: "-1", md: "0" }}
              shadow={{ xs: "4", md: "0" }}
              opacity={{
                xs: showMobileHeaderMenu ? "1" : "0",
                md: "1",
              }}
              transform={{
                xs: `translateY(${showMobileHeaderMenu ? "0" : "-100%"})`,
                md: "none",
              }}
              transition
            >
             

              <Anchor
                href="./docs"
                target="_blank"
                m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                textWeight="500"
                textColor="medium"
                hoverTextColor="black"
                transition
              >
              Get Help
              </Anchor>
              
              <UserButton/>

            </Div>
            
          </Container>
        </Div>
        </>
    )

}

export default ExplorerHeader