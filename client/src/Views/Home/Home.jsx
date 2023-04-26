import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountries } from '../../Redux/actions';
import styles from './Home.module.css';
import SearchBar from '../../components/searchBar/SearchBar';
import Cards from '../../components/Cards/Cards';
import Buttons from '../../components/Buttons/Buttons';

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            allCountries: this.props.allCountries
        };
    }
    
    componentDidMount() {
        this.props.getCountries();
    }
    
    render() {
        const { allCountries } = this.state;
        
        return (
            <div className={styles.homeContainer}>
                <h1>HOME</h1>
                <SearchBar />
                <Buttons />
                <Cards allCountries={allCountries} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allCountries: state.allCountries,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => dispatch(getCountries())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);