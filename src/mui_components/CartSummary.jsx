import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import { Card, CardContent } from '@mui/material';

export default function CartSummary() {
    return (
        <Box
            sx={{
                flexWrap: 'wrap',
                justifyContent: 'center',
                boxShadow: 'sm',
            }}
        >
            <List
                variant="outlined"
                sx={{
                    bgcolor: 'background.body',
                    minWidth: 240,
                    borderRadius: 'sm',
                    '--ListItemDecorator-size': '48px',
                    '--ListItem-paddingLeft': '1.5rem',
                    '--ListItem-paddingRight': '1rem',
                    my:2
                }}
            >
                <ListItem>
                    <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>

                    </ListItemDecorator>
                    Book1
                </ListItem>
                <ListDivider inset={'gutter'} />
                <ListItem>
                    <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>

                    </ListItemDecorator>
                    Book2
                </ListItem>
            </List>
            <Card
                variant="outlined"
                sx={{
                    bgcolor: 'background.body',
                    minWidth: 240,
                    borderRadius: 'sm',
                    boxShadow: 'sm',
                    '--CardContentDecorator-size': '48px',
                    '--CardContent-paddingLeft': '1.5rem',
                    '--CardContent-paddingRight': '1rem',
                    my:2
                }}>
                    <CardContent>
                    Total: 
                    </CardContent>
                
            </Card>

        </Box>
    );
}