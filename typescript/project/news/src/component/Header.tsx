import { AppBar, Grid, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';

export default function Header() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      console.error('로그아웃 에러가 발생했습니다.', error);
    }
  };

  return (
    <>
      <Grid>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <Typography color="white" variant="h5" component="div" sx={{ fontFamily: 'Monospace', letterSpacing: 10 }}>
              World News
            </Typography>
            <Grid sx={{ flexGrow: 1 }} />
            <Grid sx={{ display: { xs: 'none', sm: 'block' } }}>
              <List
                sx={{ listStyle: 'none', display: 'flex' }}
              >
                {user ? (
                  <>
                    <ListItem sx={{ margin: '0px 10px' }}>
                      <ListItemText primary={`${user.email || ''}`} sx={{ color: 'white' }} />
                    </ListItem>
                    <ListItem sx={{ margin: '0px 10px' }}>
                      <ListItemText
                        primary="Logout"
                        sx={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}
                        onClick={handleLogout}
                      />
                    </ListItem>
                  </>
                ) : (
                  <ListItem component={Link} to="/login" sx={{ margin: '0px 10px' }}>
                    <ListItemText primary="로그인" sx={{ textDecoration: 'none', color: 'white' }} />
                  </ListItem>
                )}
              </List>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
}
