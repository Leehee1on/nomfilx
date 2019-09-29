import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error:null,
        loading:true
    };

    async componentDidMount() {
        try {
            const {
                data:{results : nowPlaying}
            } = await moviesApi.nowPlaying();
            const {
                data:{results : popular}
            } = await moviesApi.popular();
            const {
                data:{results : upcoming}
            } = await moviesApi.upcoming();
            // throw Error(); 에러 테스트용
            this.setState({
                nowPlaying,
                popular,
                upcoming
            })
        } catch {
            console.log("what Error? Sibsaekki");
            this.setState({
                error:"Can't find movie information. 영화 없어 안농~"
            });
        } finally {
            this.setState({
                loading:false
            });
        }
    }
    
    render() {
        const {nowPlaying,upcoming,popular,error,loading} = this.state;
        console.log(this.state)
        return (
            <HomePresenter 
            nowPlaying={nowPlaying} 
            upcoming={upcoming} 
            popular={popular}
            error={error}
            loading={loading}
            />
        );
    }
}
