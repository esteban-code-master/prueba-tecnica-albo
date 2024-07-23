'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					'&:hover': {
						backgroundColor: 'none !important'
					},
					boxShadow: 'none'
				}
			}
		},
		MuiButtonBase: {
			styleOverrides: {
				root: {
					'.MuiButton-startIcon': {
						margin: '0 !important'
					},
					'.MuiButton-endIcon': {
						margin: '0 !important'
					}
				}
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					boxShadow: 'none'
				}
			}
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					background: 'white'
				}
			}
		}
	}
});

export default theme;
