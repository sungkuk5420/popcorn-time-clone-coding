import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Production from "../Production";
import Created from "../Created";
import Youtube from "../Youtube";
import Seasons from "../Seasons";
import { useRouteMatch, Link, Route } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;
const ImdbButton = styled.a`
  all: unset;
  width: 20px;
  height: 10px;
  background-color: rgb(245, 197, 24);
  color: rgb(0, 0, 0);
  font-weight: 900;
  text-transform: capitalize;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  padding: 2px 5px;
  margin-left:10px;
`;
const Tab = styled.ul`
  display:flex;
`;

const TabItem = styled.li`
  border: 1px solid #ddd;
  padding: 10px;
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <ImdbButton href={`https://www.imdb.com/title/${result.imdb_id?result.imdb_id:result.external_ids.imdb_id}`} class="imdb-button">imdb</ImdbButton>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <Tab>
            <Link to={`/show/${result.id}/Youtube`}>
              <TabItem>Youtube</TabItem>
            </Link>
            <Link to={`/show/${result.id}/Production`}>
              <TabItem>Production Company</TabItem>
            </Link>
            <Link to={`/show/${result.id}/Created`}>
              <TabItem>Created By</TabItem>
            </Link>
            <Link to={`/show/${result.id}/Seasons`}>
              <TabItem>Seasons</TabItem>
            </Link>
          </Tab>
          <Route path="/show/:id/youtube" component={Youtube} />
          <Route path="/show/:id/production" component={Production} />
          <Route path="/show/:id/created" component={Created} />
          <Route path="/show/:id/seasons" component={Seasons} />
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
