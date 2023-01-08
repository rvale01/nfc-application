import React from "react";
import { Box } from "../../atoms/Box";
import { Button } from "../../atoms/Button";
import { Container } from "../../atoms/Container";

interface HomepageLayoutI {
    children: React.ReactChild
}

export const HomepageLayout = ({children}: HomepageLayoutI) => {
    return (
        <Container height='100%' background="primary" padding="small">
            <Box direction="column" height='100%'>
                <Box direction="row" horizontalAlign="end">
                    <Button label="Register" onClick={()=> window.location.href='/register'} type='primary'/>
                    <Button label="Login" onClick={()=> window.location.href='/login'} type='secondary'/>
                </Box>

                {children}
            </Box>

        </Container>
    )
}