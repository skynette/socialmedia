import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import Form from './form'

const LoginPage = () => {
	const theme = useTheme()
	const isNonMobileScreens = useMediaQuery(theme.breakpoints.up('md'))
	const primaryLight = theme.palette.primary.light

	return (
		<Box>
			<Box width="100%" backgroundColor={theme.palette.background.alt}
				p="1rem 6%"
				textAlign="center"
			>
				<Typography
					fontWeight="bold"
					fontSize="32px"
					color="primary"
					sx={{
						"&:hover": {
							color: primaryLight,
							cursor: "pointer",
						}
					}}
				>
					SocialMedia
				</Typography>
			</Box>
			<Box width={isNonMobileScreens ? "50px" : "93%"}
			p="2rem"
			m="2rem auto"
			borderRadius="1.5rem"
			backgroundColor={theme.palette.background.alt}
			>
				<Typography fontWeight="500" variant="h5" sx={{mb: "1.5rem"}}>
					Welcome to SocialMedia, please login to continue
				</Typography>
				<Form />
			</Box>
		</Box>
	)
}

export default LoginPage