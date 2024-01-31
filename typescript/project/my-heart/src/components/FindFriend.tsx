import { Grid } from "@mui/material";
import FindFriendItem from './FindFriendItem';
import { Search, SearchIconWrapper, StyledInputBase } from './style/SearchBarStyle';
import SearchIcon from '@mui/icons-material/Search';

type Props = {};

export default function FindFriend({}: Props) {
  return (
    <Grid>
      <Grid xs={12} display='flex' justifyContent='center' alignItems='center'>
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="친구 검색"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      </Grid>
      <Grid xs={12} p={1}>
        <FindFriendItem />
      </Grid>
    </Grid>
  );
}
