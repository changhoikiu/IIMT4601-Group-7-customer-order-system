import * as React from 'react';

import { styled } from '@mui/material/styles';
import { Box, Paper } from "@mui/material";


import Typography from "@mui/joy/Typography";
import List from "@mui/joy/List";
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';

import SubmitReservation from '../ui-components/SubmitReservation';
import { State } from "../context/Context"

const Checkout = ({handleNext, handleSubmittedData}) => {

	const {
		state: { cart },
		dispatch,
	} = State();

	const [total, setTotal] = React.useState();
	React.useEffect(() => {
		setTotal(cart.reduce((acc, book) => acc + book.price * book.qty, 0));
	}, [cart]);

	const handleCheckout = fields => {
		handleSubmittedData(fields);
		handleNext();
	}

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		// ...theme.typography.body2,
		padding: theme.spacing(2),
		textAlign: 'left',
		color: theme.palette.text.secondary,
		display: 'flex',
		flexDirection: 'column',
		variant: 'outlined',
	}));

	const Column = styled(Box)(({ theme }) => ({
		marginLeft: theme.spacing(2),
		textAlign: 'left',
	}));

	return (
		<>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Box sx={{ flex: 2, mr: 4 }}>
					<List
						variant="outlined"
						sx={{
							bgcolor: 'background.body',
							borderRadius: 'sm',
							boxShadow: 'sm',
							py: 2,
							'--ListItemDecorator-size': '48px',
							'--ListItem-paddingLeft': '1.5rem',
							'--ListItem-paddingRight': '1.5rem',
						}}
					>
						<ListItem>
							<Typography level='h4'>
								Cart
							</Typography>
						</ListItem>
						{cart.map(book => (
							<Box>
								<ListItem
									key={book.id}
									sx={{
										mr: 3,
									}}
								>
									<ListItemDecorator sx={{ width: '10%' }}>
										<img src={book.image} alt={book.title} />
									</ListItemDecorator>
									<Column sx={{ width: '50%' }}>
										<Typography level="h5">{book.title}</Typography>
										<Typography>{book.authors}</Typography>
									</Column>
										<Typography level="h5" sx={{marginLeft: 'auto'}}>${book.price}x{book.qty}</Typography>
								</ListItem>
								<ListDivider inset="gutter" />
							</Box>
						))}
						<ListItem>
							<Typography level="h4">
								Subtotal: {cart.length} item(s)
							</Typography>
							<Typography level="h4" sx={{ ml: 'auto' }}>
								Total: ${total}
							</Typography>
						</ListItem>
					</List>
				</Box>
				<Item sx={{ flex: 1 }}>
					<SubmitReservation 
					onSubmit={handleCheckout}
					/>
				</Item>
			</Box>
		</>
	)
}

export default Checkout;