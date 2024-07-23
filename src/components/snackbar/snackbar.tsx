import { Alert, Snackbar as SnackbarMaterial } from "@mui/material"
import { FunctionComponent, useState } from "react"
import { SnackbarProps } from "./props/snackbar.props"

export const Snackbar: FunctionComponent<SnackbarProps> = ({ message, duration = 6000, type, refer }) => {
	const [open, setOpen] = useState(true)

	const snackbarClose = () =>{
		setOpen(false)
		refer(null)
	}
	
	return(
		<>
			<SnackbarMaterial 
				open={open}
				autoHideDuration={duration}
				onClose={snackbarClose}
			> 
				<Alert 
					onClose={snackbarClose} 
					severity={type}
				>
					{message}
				</Alert>
			</SnackbarMaterial>
		</>
	)
}