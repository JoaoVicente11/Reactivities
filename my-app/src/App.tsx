import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import { Header, Icon, HeaderContent, List } from 'semantic-ui-react'

class App extends Component {
  state = {
    values: [

    ]
  }
  componentWillMount(){
    axios.get('http://localhost:5000/api/values')
      .then((response => {
        this.setState({
         values: response.data
        })
    }))
    
  }
  render(){
    return (
      <div>
        <Header as="h2" icon>
          <Icon name="users" />
          <HeaderContent>Reactivities</HeaderContent>
        </Header>
        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }  
}

export default App;
