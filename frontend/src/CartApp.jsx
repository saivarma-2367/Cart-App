import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import InfiniteScroll from 'react-infinite-scroll-component';

function CartApp() {
  const [animals, setAnimals] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
 const fetchAnimals = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const res = await fetch(`http://localhost:5000/animals?page=${page}&limit=15`);
  const data = await res.json();

  if (data.length < 15) {
    setHasMore(false);
  }
  setAnimals((prev) => [...prev, ...data]);
  setPage((prev) => prev + 1);
};


  useEffect(() => {
  fetchAnimals();
}, []);


  return (
    <div style={{ padding: '2rem' }}>
      <InfiniteScroll
        dataLength={animals.length}
        next={fetchAnimals}
        hasMore={hasMore}
        loader={<h4>Loading more animals...</h4>}
        endMessage={<p style={{ textAlign: 'center' }}><b>No more animals to show.</b></p>}
      >
      <Grid container spacing={3} justifyContent="center">
        {animals.map((animal, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg" 
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {animal.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {animal.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      </InfiniteScroll>
    </div>
  );
}

export default CartApp;
