import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import '../../styles/ListPhoto.scss'

function ListPhoto() {
    const { photos } = useSelector(state => state.photos)

    return (
        <section className="list-photo">
            <Container>
                <div className="list-photo__add">
                    <NavLink to="/add">Add Photo</NavLink>
                </div>
                <div className="list-photo__list">
                    <Row>
                        {
                            photos.map((photo, index) => {
                                return (
                                    <Col className="list-photo__list-item" key={index} xl="3">
                                        <img src={photo.image} alt="" width="100%" />
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default ListPhoto
