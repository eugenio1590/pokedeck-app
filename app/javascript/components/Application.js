import React, { useState } from "react"

import {
  Container,
  Row, 
  Col,
  Image
} from "react-bootstrap";

import PokemonList from "./PokemonList";
import Pagination from "./PaginationComponent"

const images = require.context('../images', true)
const logoUrl = images('./logo.png', true)

const Application = () => {
  const data = [];
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <React.Fragment>
      <main className="text-white" style={{backgroundColor: "#ff0000ab", height: "100vh"}}>
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
            <Col lg={4}>
              <PokemonList data={data} />
              <div
                className="my-4">
                <Pagination
                  itemsCount={data.length}
                  itemsPerPage={1}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  alwaysShown={false}
                />
              </div>
            </Col>
            <Col md={8} lg={6}>
              {/*Pokemon Detail*/}
            </Col>
          </Row>
        </Container>
      </main>
    </React.Fragment>
  )
}


export default Application
