import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section"
import Error from "Components/Error";

const Container = styled.div`
	padding: 0 20px;
`;
const Form = styled.form`
	margin-bottom:20px;
`;

const Input = styled.input`
	all:unset;
	font-size: 28px;
	width:100%;
`;
// searchTerm을 value로 두는 이유는 searchContainer에서 값을 가져와서 표시해주려고(결과)
const SearchPresenter = ({movieResults, tvResults  , error ,handleSubmit,loading,searchTerm,updateTerm}) => 
<Container>
	<Form onSubmit={handleSubmit}>
		<Input placeholder="Search Movies or Tv Shows..?" value={searchTerm} onChange={updateTerm}/>
	</Form>
	{loading ? <Loader /> : 
	<>
		{movieResults && movieResults.length > 0 && (
		<Section title="Movie Results">
			{movieResults.map(movie => (<span key={movie.id}>{movie.title}</span>))}
		</Section>)}
		{tvResults && tvResults.length > 0 && (
		<Section title="TV Show Results">
			{tvResults.map(show => (<span key={show.id}>{show.name}</span>))}
		</Section>)}
		{error && <Error text={error}/>}
	</>

}
</Container>;

SearchPresenter.propTypes = {
	movieResults:PropTypes.array,
	tvResults:PropTypes.array,
	error:PropTypes.string,
	searchTerm:PropTypes.string,
	loading:PropTypes.bool.isRequired,
	handleSubmit:PropTypes.func.isRequired,
	updateTerm:PropTypes.func.isRequired
}
export default SearchPresenter;