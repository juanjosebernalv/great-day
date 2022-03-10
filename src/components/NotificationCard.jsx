import React, { useState } from "react";
import styled from "styled-components";
import SignInButton from './SignInButton';

const NotificationCard = () => {
    const [notificationNumber, setNotificationNumber] = useState(1);

    return (
        <Wrapper>
            {notificationNumber >= 1 && (
                <Paragraph>You have {notificationNumber} new notification</Paragraph>
            )}
            <SignInButton></SignInButton>
        </Wrapper>
    );
};

export default NotificationCard;

const Wrapper = styled.div`
    background: rgba(255, 255, 255, 0.6);
    box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.6);
    border-radius: 30px;
    padding: 20px;
    width: 300px;
    display: grid;
    gap: 30px;
    justify-items: center;
    align-items: center;
`;

const Paragraph = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-style: normal;
    font-size: 15px;
    line-height: 48px;
    text-align: center;
`;