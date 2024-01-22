import { Grid, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import React from 'react'

const category = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];


type Props = {}

export default function Category({}: Props) {
  return (
    <Grid
    display="flex"
    padding="1rem"
    width="768px"
    margin="0 auto"
    sx={{
      '@media screen and (max-width: 768px)': {
        width: '100%',
        overflowX: 'auto',
      },
    }}
  >
    {category.map((c) => (
      <Link
        key={c.name}
        component={NavLink}
        activeClassName="active"
        exact={c.name === 'all'}
        to={c.name === 'all' ? '/' : `/${c.name}`}
        sx={{
          cursor: 'pointer',
          whiteSpace: 'pre',
          textDecoration: 'none',
          color: 'inherit',
          paddingBottom: '0.25rem',
          '&:hover': {
            color: '#495057',
          },
          '&.active': {
            fontWeight: 600,
            borderBottom: '2px solid #22b8cf',
            color: '#22b8cf',
            '&:hover': {
              color: '#3bc9db',
            },
          },
          '& + &': {
            marginLeft: '1rem',
          },
        }}
      >
        {c.text}
      </Link>
    ))}
  </Grid>
  )
}