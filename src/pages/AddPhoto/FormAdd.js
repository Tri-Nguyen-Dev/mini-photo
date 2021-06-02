import { useFormik } from 'formik'
import { useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import faker from 'faker'

import * as Yup from 'yup';
import '../../styles/FormAdd.scss'
import { useDispatch } from 'react-redux';
import { addPhoto } from '../../redux/slices/PhotoSlice';
import { useHistory } from 'react-router';


function FormAdd() {
    const [imgUrl, setImgUrl] = useState('http://placeimg.com/640/480/animals')
    let history = useHistory()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            title: '',
            category: 0,
            image: ''
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(4, 'Must be 4 characters or more')
                .required('Required')
        }),
        onSubmit: (values, { resetForm }) => {
            values.image = imgUrl
            dispatch(addPhoto(values))
            resetForm({})
            setImgUrl('')

            history.push('/')
        }
    })


    const handleClick = () => {
        setImgUrl('')
        setImgUrl(faker.image.image)
    }
    return (
        <div className="form-add">
            <Container>
                <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset} className="form-add__content">
                    <FormGroup className="form-group">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <div className="form-group__error">{formik.errors.title}</div>
                        ) : null}
                    </FormGroup>
                    <FormGroup >
                        <Label htmlFor="category">Category</Label>
                        <Input type="select" name="category" id="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="0">Chocolate</option>
                            <option value="1">Strawberry</option>
                            <option value="2">Vanilla</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Button
                            onClick={handleClick}
                            color="primary"
                            name="random-img"
                            outline

                        >Random Image</Button>
                        <div className="form-group__img">
                            <img src={imgUrl} alt="" width="100%" />
                        </div>
                        {formik.touched.image && formik.errors.image ? (
                            <div className="form-group__error">{formik.errors.image}</div>
                        ) : null}
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Button color="success" size="lg" type="submit">Thêm vào album</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}

export default FormAdd
