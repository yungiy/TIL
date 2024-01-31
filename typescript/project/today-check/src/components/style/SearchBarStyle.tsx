import { InputBase, alpha, styled } from "@mui/material";

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border: '1px solid grey',
  borderRadius: '3px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '22ch',
    },
  },
}));