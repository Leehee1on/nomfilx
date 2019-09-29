import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader"

const Container = styled.div`
    padding:0px 10px;
`;

const TVPresenter = ({topRated,  popular ,airingToday , error ,loading}) => loading ? <Loader/> : (
    <Container>
        {console.log(topRated.map(show=>show.name))}
        {topRated && topRated.length > 0 && (
            <Section title="Top Rated Shows">
                {topRated.map(show => show.name)}
            </Section>
        )}
        {popular && popular > 0 && (
            <Section title="popular Shows">
                {popular.map(show => show.name)}
            </Section>
        )}
        {airingToday && airingToday > 0 && (
            <Section title="AiringToday Shows">
                {airingToday.map(show => show.name)}
            </Section>
        )}
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