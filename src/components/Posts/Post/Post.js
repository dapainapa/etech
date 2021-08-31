
import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
 
      <div className={classes.overlay}>
        <Typography variant="h6">{post.title}</Typography>
        
      </div>
 
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.creator} ({moment(post.createdAt).fromNow()})</Typography>
        <Typography variant="body2">{post.message}</Typography>
      </CardContent>
      
      
      <div className={classes.details}>
      <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Patīk {post.likeCount} </Button>
        <Button style={{ color: 'blue' }} size="small" onClick={() => setCurrentId(post._id)}>Labot</Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Dzēst</Button>

      </CardActions>
    </Card>
  );
};

export default Post;

