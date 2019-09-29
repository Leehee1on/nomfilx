import React from "react";
import DetailPresenter from "./DetailPresenter";
import {tvApi,moviesApi} from "api";

export default class extends React.Component{
    // 생성자 클래스
    constructor(props){
        super(props);
        const {location : {pathname}} = props;
        this.state = {
            result :null,
            error:null,
            loading:true,
            isMovie: pathname.includes("/movie/")
        };
    }

    // componentDidMount로 실행이되서 params 에 id 호출 을 변수저장 ->
    // parseInt를 작성하여 string을 number로 바꾼뒤 if문으로 검사

    async componentDidMount() {
        const {
            match: {
                params:{ id }
            },
            history: { push } ,
        } = this.props;
        const {isMovie}= this.state; 
        console.log(isMovie);
        
        const parsedId = parseInt(id);
        if(isNaN(parsedId)) {
            return push("/");
        }
        console.log(parsedId);
        // 값 확인용 
        console.log(this.props);

        let result = null;
        try{
            if (isMovie) {
                ({data:result} = await moviesApi.movieDetail(parsedId))
                // /movie/ 일때 안에있는 내용을 써야하기에
                //앞에 const가 붙은것과 같다
            } else {
                ({data:result} = await tvApi.showDetail(parsedId))
                // /show/ 일때 
            }
            // console.log(result);
        } catch {
            this.setState({
                error:"Can't find anything.. ppaeaeaeaeaeaeaeaekk!!!!!!"
            })
        }  finally {
            this.setState({loading:false,result})
        }
    }

    render() {
        const {result,error,loading} = this.state;
        console.log(result);
        return (
            <DetailPresenter 
            result={result}
            error={error}
            loading={loading}
            />
        )
    }
}