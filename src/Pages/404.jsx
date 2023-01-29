import { useNavigate } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NotFound() {
    const navigate = useNavigate()
    return (<>

        <Box
            component="main"
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexGrow: 1,
                minHeight: '100%'
            }}
        >


            <Container maxWidth="md">
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <h1>
                        404
                    </h1><br />
                    <Typography
                        align="center"
                        color="textPrimary"
                        variant="h1"
                    >
                        404: The page you are looking for isn’t here
                    </Typography>
                    <Typography
                        align="center"
                        color="textPrimary"
                        variant="subtitle2"
                    >
                        You either tried some shady route or you came here by mistake.
                        Whichever it is, try using the navigation
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>

                    </Box>
                    <div


                    >
                        <Button
                            component="a"
                            startIcon={(<ArrowBackIcon fontSize="small" />)}
                            sx={{ mt: 3 }}
                            variant="contained"
                            onClick={() => {
                                navigate('/monitor')
                            }}
                        >
                            Go back to Poll
                        </Button>
                    </div>
                </Box>
            </Container>
        </Box>
    </>)
};

export default NotFound;
