import React from 'react'
import {Container,Typography,Grow,Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import {useEffect,useState} from 'react'
import {getPosts} from './actions/posts'



import memories from './images/memories22.png'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import useStyles from './styles'

const App = () => {
    const classes=useStyles()
    const dispatch=useDispatch()
    const [currentId, setCurrentId] = useState(null)



    useEffect(() => {
        dispatch(getPosts()) 
    }, [currentId,dispatch])    //[currentId,dispatch] 3shan ytghyar bs hwa sh3'al kda mn3'erha update::tle3 hwa 7mar

    
    return (
       <Container maxWidth='lg'>
           <div className={classes.appBar} position='static'>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography> 
                <img className={classes.image} src={memories} alt="memories" height="60" />
           </div>
           <Grow in>
               <Container>
                    <Grid container className={classes.mainContainer} justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Posts setCurrentId={setCurrentId} currentId={currentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                    
               </Container>
           </Grow>
       </Container>
    )
}

export default App

