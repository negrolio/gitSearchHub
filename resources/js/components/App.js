import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import homeImage from './../../img/github-mark.png';
import Spinner from './Spinner';
import InputAndButton from './InputAndButton';
import TableRepos from './TableRepos';


export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            repos: '',
            inputToSearch: '',
            showSpinner: false,
            showError: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.makeCallToApi = this.makeCallToApi.bind(this);
        this.handleSpinner = this.handleSpinner.bind(this);
        this.onButtonPressed = this.onButtonPressed.bind(this);
    }

    handleSpinner () {
        this.setState(prevState => ({
            showSpinner: !prevState.showSpinner
        }))
    }

    handleChange (event) {
        this.setState({
            inputToSearch: event.target.value
        })
    }

    handleKeyPress (event) {
        if(event.key == 'Enter'){
          this.onButtonPressed()
        }
    }

    onButtonPressed () {
        this.handleSpinner();
        this.makeCallToApi();
    }

    makeCallToApi () {
        if (this.state.inputToSearch.length !== 0) {

            axios.get(`/search/${this.state.inputToSearch}`)
            .then(res => {
                this.setState({
                    repos: res.data,
                    showSpinner:false
                })
            })
            .catch(function (error) {
                console.log(error, 'err in the call');
                this.handleSpinner();
            });

        } else {
            console.log('you have to write something to search')
            this.handleSpinner();
        }
    }

    render() {
        return (
            <div>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{padding:20}}
                    >
                    <img src={homeImage} style={{width:'10%', opacity:'0.7'}}/>
                    <div style={{marginBottom:'2%', marginTop:'2%', textAlign:'center'}}>
                        <h1>GitSearcHub</h1>
                    </div>

                    <InputAndButton 
                        placeHolder={'Find Repos'}
                        buttonLabel={'search'}
                        handleChange={this.handleChange}
                        handleKeyPress={this.handleKeyPress}
                        onButtonPressed={this.onButtonPressed}/>

                    {this.state.showSpinner && <Spinner/>}

                    <div style={{width:"94vw"}}>
                        {this.state.repos && <TableRepos reposArray={this.state.repos}/>}
                    </div>
                </Grid>
            </div>
        );
    }
}
if (document.getElementById('reactContainer')) {
    ReactDOM.render(<App/>, document.getElementById('reactContainer'));
}
