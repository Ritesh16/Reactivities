import { MenuItem } from "@mui/material";
import { ReactNode } from "react";
import { NavLink } from "react-router";

export default function MenuItemLink({children, to}: {children: ReactNode, to: string}) {
  return (
    <MenuItem 
        component={NavLink} 
        to={to} 
        sx={{
            fontSize: '1.2rem', 
            textTransform: 'uppercase', 
            fontWeight: 'bold',
            color: 'inherit',
            textDecoration: 'none',
            '&.active': {
                color: 'yellow',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '5px'
            },
        }}>
    {children}
    </MenuItem>
  )
}