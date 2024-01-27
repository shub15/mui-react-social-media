import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ShareIcon from '@mui/icons-material/Share'
import { Bookmark, BookmarkBorder, Favorite, FavoriteBorder } from '@mui/icons-material'

const pic = "https://cdn.wallpapersafari.com/35/34/xEKLbk.jpg";
const details = {
    name: "John",
    title: "Ubuntu",
    description: "Open source",
    date: "September 14, 2016"
}

const Post = () => {
    return (
        <div>
            <Card
                sx={{ marginBottom: 5 }}
            >
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={details.title}
                    subheader={details.date}
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image={pic}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {details.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
                    <Checkbox
                        icon={<BookmarkBorder />}
                        checkedIcon={<Bookmark />}
                    />
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Post