import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component{
    state = {
        movieResults:null,
        tvResults:null,
        searchTerm:"",
        error:null,
        loading:false
    };

    // componentDidMount() {
    //     this.handleSubmit();
    // }//시뮬레이션용

    handleSubmit = (event) => {
        event.preventDefault();
        const {searchTerm} = this.state;
        if(searchTerm!=="") {
            this.searchByTerm();
        } 
    }

    updateTerm = (event) => {
        const {target: {value}} =event;
        this.setState({
            searchTerm: value
        });
        console.log(value);
    }

    // searchPresenter 에서 폼 만든것으로 search를 호출(인풋작성시) onSubmit
    // onSubmit="handleSubmit"으로 호출

    searchByTerm = async() => {
        const{searchTerm} = this.state;
        this.setState({loading:true});
        try{
            // throw Error();
            const {
                data:{results:movieResults}
            } = await moviesApi.search(searchTerm);
            const {
                data:{results:tvResults}
            } = await tvApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            });

        } catch {
            console.log("what Error? Sibsaekki");
            this.setState({
                error:"Can't find Results."
            });

        } finally {
            this.setState({loading:false});
        }
    };

    render() {
        const {movieResults,tvResults,searchTerm,error,loading} = this.state;
        return (
            <SearchPresenter 
            movieResults={movieResults} 
            tvResults={tvResults}
            error={error}
            searchTerm={searchTerm} 
            loading={loading}
            handleSubmit={this.handleSubmit}
            updateTerm={this.updateTerm}
            />
        )
    }
}