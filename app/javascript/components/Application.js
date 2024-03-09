import React, { useState, useEffect } from "react"

import {
  Container,
  Row, 
  Col,
  Image
} from "react-bootstrap";

import PokemonList from "./PokemonList";
import Pagination from "./PaginationComponent";
import FullSpinner from "./FullSpinner";

const images = require.context('../images', true)
const logoUrl = images('./logo.png', true)

const ITEMS_PER_PAGE = 8

const Application = () => {
  const [state, setState] = useState({isLoading: false, count: 0, page: 1, results: []});

  const onPageChanged = page => {
    fetchData(page);
  }

  const fetchData = async page => {
    if (page > 0) {
      setState({...state, isLoading: true})
      let response = await fetch(`/pokemon.json?page=${page}&limit=${ITEMS_PER_PAGE}`);
      if (response.ok) {
        let data = await response.json();
        setState({...data, isLoading: false});
      }
    }
  }

  useEffect(() => { fetchData(state.page) }, []);

  return (
    <React.Fragment>
      <main className="text-white" style={{backgroundColor: "#ff0000ab", minHeight: "100vh"}}>
        <Container className="py-lg-8 py-5">
          <Row className="justify-content-center">
            <Col xl={8} lg={10} className="col-12">
              <div className="text-center d-flex flex-column gap-5">
                <div className="d-flex flex-column gap-3 mx-lg-8">
                  <div className="mb-0 display-5">
                    <Image src={logoUrl} className="img-fluid" alt="" width="30%" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <FullSpinner isActive={state.isLoading}/>
              <PokemonList data={state.results} />
              <div className="my-4">
                <Pagination
                  itemsCount={state.count}
                  itemsPerPage={ITEMS_PER_PAGE}
                  currentPage={state.page}
                  setCurrentPage={onPageChanged}
                  alwaysShown={false}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </React.Fragment>
  )
}


export default Application
