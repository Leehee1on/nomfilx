import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader"
import Error from "Components/Error";

const Container = styled.div`
    padding:0px 20px;
`;

const TVPresenter = ({topRated,  popular ,airingToday , error ,loading}) => loading ? (<Loader/>) : (
    <Container>
        {console.log(topRated.map(show=>show.name))}
        {topRated && topRated.length > 0 && (
            <Section title="Top Rated Shows">
                {topRated.map(show => (
                    <span key={show.id}>{show.name}</span>
                ))}
            </Section>
        )}
        {popular && popular.length > 0 && (
            <Section title="popular Shows">
                {popular.map(show => (
                    <span key={show.id}>{show.name}</span>
                ))}
            </Section>
        )}
        {airingToday && airingToday.length > 0 && (
            <Section title="AiringToday Shows">
                {airingToday.map(show => (
                    <span key={show.id}>{show.name}</span>
                ))}
            </Section>
        )}
        {error && <Error text={error}/>}
    </Container>
);
    

TVPresenter.propTypes = {
    topRated:PropTypes.array,
    airingToday:PropTypes.array,
    popular:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}

export default TVPresenter;