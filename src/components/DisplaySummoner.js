import React, { Component } from 'react'
import SummonerStats from './SummonerStats';
import SummonerName from './SummonerName';


export default class DisplaySummoner extends Component {

    state = {
        apikey : "RGAPI-ca1f4d68-d7e4-4dcf-a5d4-1389ec5eaf6f",
        accountID : '',
        matchlist : [],
        summonerName: ''

    }
    componentDidMount(){
        this.setState({summonerName: (JSON.parse(localStorage.getItem("List")))[0].title});
        
    }

    render() {
        
        return (
            <div>
                <h1>PlayerInfo</h1>
                <SummonerName name = {this.state.summonerName}></SummonerName>

            </div>
        )
    }
}
