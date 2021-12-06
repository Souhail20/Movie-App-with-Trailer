import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ReactPlayer from "react-player";
import {Link} from 'react-router-dom';
import "./MovieList/Movie.css";

const Trailer = (props) => {
    var movie=props.location.state.movie
    
  return (    
 
            <div className="trailer">
              <Card sx={{ maxWidth: 600 }}>
                <CardActionArea>
                  <ReactPlayer url={movie.trailer} />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="#546e7a"
                      fontFamily="Segoe UI"
                    >
                      {movie.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to ="/">
                  <Button size="small" color="primary"  variant="contained" >
                    Back Home
                  </Button>
                  </Link>
                </CardActions>
              </Card>
            </div>
          )
      
  
  };

export default Trailer;
