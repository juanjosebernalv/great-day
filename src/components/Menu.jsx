import React, { useState } from "react"
import styled from "styled-components";
import { menuData } from "../data/menuData";
import NavButton from "./NavButton";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Wrapper>
            <NavButton
                onClick={() => setIsOpen(!isOpen)}
                title="Menu"
                image="https://designcode.io/images/icons/courses.svg"
            />
            {isOpen && (
            <NavigationWrapper>
                {menuData.map((menu, index) => (
                    <NavButton
                        key={index}
                        title={menu.title}
                        image={menu.image}
                     />
                ))}
            </NavigationWrapper>
            )}

        </Wrapper>
    );
};

export default Menu;

const Wrapper = styled.div`
    display: grid;
    justify-items: center;
`;

const NavigationWrapper = styled.div`
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25), 0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    padding: 20px 20px;
`;