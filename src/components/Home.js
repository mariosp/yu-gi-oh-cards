import React from 'react';
import CardItem from './CardItem';
import CardInfo from './CardInfo';
import cardTable from '../datastore/CardTable';
import OCButton from './OCButton'
import Title from './Title';



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
        document.getElementsByClassName("cardbox")[this.state.selected].classList.remove('active-item');
    
        document.getElementsByClassName("cardbox")[id].classList.add('active-item');
        this.setState({
            ...this.state,
            selected: id
        })

        

        

     }
    
    
    
    render(){
        
        let i=0;

        
        
        return(
            
    <div className="wrapper">
        <nav id="sidebar" >
            <div className="sidebar-header">
            <img className="logo" src="./images/logo1.png" />
            </div>

                {this.state.cards.map(el => (
                    
                    <div onClick={this.selectItem} data-id={i++}>
                    <CardItem  name={el.name} type={el.card_type} />
                    </div>
                ))}



        </nav>
 
    
        <div id="content">
            <div className="title">
                
                <OCButton />
                
                {this.state.cards.length >0 ? <h2>{this.state.cards[this.state.selected].name}</h2> : ''}
                
                    
            </div>

            {this.state.cards.length >0 ? <CardInfo param={this.state.cards[this.state.selected] } /> : ''}
            
            
        
        </div>
    </div>













            
        );


    }
    
    
    
    
    
    }


export default Home;

//{ this.state.cards.length >0 && <CardInfo param={this.state.cards[this.state.selected] } /> }