import React from 'react';
import CardItem from './CardItem';
import CardInfo from './CardInfo';
import cardTable from '../datastore/CardTable'


export class Home extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
            cards: [],
            selected: 0
            };


            this.selectItem = this.selectItem.bind(this);
      
            
    }
    
    
      getData(){
        let cards =[];
        cardTable.forEach( async (element) => {
             console.log(element);
            let response = await fetch('http://52.57.88.137/api/card_data/'+ element);
            let json = await response.json();
            console.log(json);
            if(json.status == "success"){
                cards.push(json.data);
            }
            
            this.setState({
                ...this.state,
                cards: cards
            });
        });
    
          }
    
    
    componentDidMount(){
       this.getData();
    
     }

     selectItem(e){

        let id = e.currentTarget.dataset.id;

        this.setState({
            ...this.state,
            selected: id
        })

     }
    
    
    
    render(){
        
        let i=0;

        
        return(
            <div className="home">
            <div className="home__list">
            <div>
           
                
            {this.state.cards.map(el => (
                
                <div onClick={this.selectItem} data-id={i++}>
                <CardItem  name={el.name} type={el.card_type} />
                </div>
            ))}

            </div>
            </div>


            <div className="home__info">
                
            {this.state.cards.length >0? <CardInfo param={this.state.cards[this.state.selected] } /> : ''}
    
            </div>
        
            </div>
    
            
        );
    }
    
    
    
    
    
    }


export default Home;

//{ this.state.cards.length >0 && <CardInfo param={this.state.cards[this.state.selected] } /> }