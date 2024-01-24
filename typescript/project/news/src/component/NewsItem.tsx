import React from 'react';
import { Grid, Typography, Link as MuiLink, LinkProps as MuiLinkProps} from '@mui/material';

interface NewsItemProps {
  article: {
    title: string;
    description: string;
    author: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
  };
}

export default function NewsItem(props : NewsItemProps) {
  
  const { title ,description, url, urlToImage, publishedAt, author } = props.article;
  
  return (
    <Grid margin="10px" >
    <Grid display="flex" >
           {urlToImage && (
         <MuiLink href={url} target="_blank">
          <Grid margin="5px" width='180px' height="100px">
             <img src={urlToImage} alt="" width="100%" height="100%" />
           </Grid>
         </MuiLink>
      )}
      <Grid>
        <Typography variant="h6">
          <Grid sx={{marginBottom: "10px"}}>
            <MuiLinkComponent href={url} target="_blank" color="inherit">
              {title}
            </MuiLinkComponent>
          </Grid>
        </Typography>
        <Grid margin="5px">
          <Typography variant="body2">{description}</Typography>
        </Grid>
        <Grid container>
          <Grid item margin="5px" xs>
            <Typography variant="body1" sx={{ fontWeight:'bold'}}>{publishedAt}</Typography>
          </Grid>
          <Grid item margin="5px">
            <Typography variant="body1" sx={{ fontWeight:'bold'}}>{author}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  );
}

const MuiLinkComponent: React.FC<MuiLinkProps> = (props) => {
return <MuiLink {...props} />;
};