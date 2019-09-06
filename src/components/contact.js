import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
    render () {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Marcelo Alves</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{height: '250px'}}
                         />
                         <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e 
                             de impressos, e vem sendo utilizado desde o século XVI, quando um impressor 
                             desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro
                         </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Onde me encontrar</h2>
                        <hr/>
                        <div className='contact-list'>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton' }}>
                                    <i className='fa fa-phone-square'></i>
                                    (62) 98111-2793
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton' }}>
                                    <i className='fa fa-fax'></i>
                                    (62) 98111-2793
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton' }}>
                                    <i className='fa fa-envelope'></i>
                                    marceloalves_ac@hotmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton' }}>
                                    <i className='fa fa-skype'></i>
                                    marcelo.rodrigues.alves
                                </ListItemContent>
                            </ListItem>
                            </List>
                        </div>                        
                    </Cell>
                </Grid>
            </div>
            
        )
    }
}

export default Contact;