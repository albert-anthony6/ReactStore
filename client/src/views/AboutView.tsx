import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import agent from "../api/agent";
import { useState } from "react";

export default function AboutView() {
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    function getValidationError() {
        agent.TestErrors.getValidationError()
            .then(() => console.log('should not see this'))
            .catch((err) => setValidationErrors(err));
    }

    return (
        <Container>
            <Typography gutterBottom variant="h2">Error for testing purposes</Typography>
            <ButtonGroup fullWidth>
                <Button
                    variant="contained"
                    onClick={() => agent.TestErrors.get400Error().catch((err) => console.error(err))}
                >
                    Test 400 Error
                </Button>
                <Button
                    variant="contained"
                    onClick={() => agent.TestErrors.get401Error().catch((err) => console.error(err))}
                >
                    Test 401 Error
                </Button>
                <Button
                    variant="contained"
                    onClick={() => agent.TestErrors.get404Error().catch((err) => console.error(err))}
                >
                    Test 404 Error
                </Button>
                <Button
                    variant="contained"
                    onClick={() => agent.TestErrors.get500Error().catch((err) => console.error(err))}
                >
                    Test 500 Error
                </Button>
                <Button
                    variant="contained"
                    onClick={getValidationError}
                >
                    Test Validation Error
                </Button>
            </ButtonGroup>
            {validationErrors.length > 0 && 
                <Alert severity="error">
                    <AlertTitle>Validation Errors</AlertTitle>
                    <List>
                        {validationErrors.map((err) => (
                            <ListItem key={err}>
                                <ListItemText>{err}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Alert>
            }
        </Container>
    )
}