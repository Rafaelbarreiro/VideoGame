import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clear, getVideogameByName} from '../../actions'

export default function SearchBar({setCurrentPage}){

    const dispatch = useDispatch();
    const [name, setName] = useState("")

    useEffect(() => {
        dispatch(getVideogameByName)
    }, [dispatch])

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
        /* dispatch(getVideogameByName(e.target.value));
        setCurrentPage(1) */
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getVideogameByName(name));
        dispatch(clear());
        setName("");
    }
    

    return (
        <div>
            <form >
                <input
                    className="input"
                    type="text"
                    placeholder="Search your Videogame"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => handleInputChange(e)}
                />
                <button onClick ={(e)=> handleSubmit(e)}>Search </button>
            </form>
        </div>
    )
} 

/* import React, {Component} from 'react';
import { connect } from "react-redux";
import { getVideogameByName} from '../../actions';

export class SearchBar extends Component{
    constructor(props){
        super(props)
            this.state={
                title: ""
        };
    }
    handleInputChange(event){
        this.setState({title: event.target.value})
        
    }
    handleSUbmit(event){
        event.preventDefault();
        this.props.getVideogameByName(this.state.title);
        this.setState({title:""});
    }

    render(){
        const {title} = this.state;
        return (
            <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input
                    className="input"
                    type="text"
                    placeholder="Search your Videgoame"
                    id="name"
                    autoComplete="off"
                    value={title}
                    onChange={(e) => this.handleInputChange(e)}
                />
            </form>
        </div>
        )
    }

};


function mapStateToProps(state){
    return{
        gamesByName: state.gamesByName
    };
};
/* function mapDispatchToProps(dispatch){
    return{
        getVideogameByName: title => dispatch(getVideogameByName(title))
    }
}; */
/* export default connect(
    mapStateToProps,
    {getVideogameByName}
)(SearchBar); */ 