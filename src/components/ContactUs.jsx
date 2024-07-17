import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.css';

const ContactUs = () => {
    const formElement = useRef();

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        message: ""
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Minimum 3 simvoldan ibarət olmalıdır")
            .max(55, "Maksimum 55 simvoldan çox olmamalıdır")
            .required("Boş buraxıla bilməz")
            .matches(/^[^\d]+$/, "Rəqəm daxil edilə bilməz"),
        email: Yup.string()
            .email("Elektron poçt standartlara uyğun deyil")
            .required("Elektron poçt mütləq doldurulmalıdır"),
        phone: Yup.string()
            .matches(/^\+\d{1,3}\d{9,}$/, "Telefon nömrəsi ölkə kodu ilə birlikdə daxil edilməlidir və minimum 12 simvoldan ibarət olmalıdır")
            .required("Telefon nömrəsi mütləq doldurulmalıdır"),
        message: Yup.string()
    });

    const onSubmit = (values, { resetForm }) => {
        emailjs.sendForm('service_tgugl3b', 'template_ehy7khc', formElement.current, 'kC_Nh5p5zAdkaRJPd')
            .then((result) => {
                toast.success("Müraciətiniz qeydə alındı");
                console.log(result);
                resetForm(); // Reset form fields after successful submission
            }, (error) => {
                toast.error("Serverdə xəta var. Bir az sonra cəhd edin.");
                console.log(error);
            });
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    return (
        <>
            <div className="ContactUs py-5">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                    <div className="info-items">
                        <div className="item">
                            <div className="icon">
                            <i class="fa-solid fa-map-location-dot"></i>
                            </div>
                            <div className="inof">
                                <h6 className='h5'>Location</h6>
                                <p>
                                        22 Baker Street, London, United Kingdom, W1U 3BW
                                    </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="icon">
                                <i class="fa-solid fa-phone-flip"></i>
                            </div>
                            <div className="inof">
                                <h6 className='h5'> Make A Call </h6>
                                <p> +44-20-7328-4499 </p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="icon">
                            <i class="fa-solid fa-envelope-open"></i>
                            </div>
                            <div className="inof">
                                <h6 className='h5'> Send A Mail </h6>
                                <p> info@murad.com </p>
                            </div>
                        </div>
                    </div>
                </div>
                        <div className="col-12 col-md-6 col-lg-8 py-5 px-5">
                            <form onSubmit={formik.handleSubmit} ref={formElement} className='form'>
                                <h2>We’d love to hear from you anytime</h2>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Name*'
                                        className={`form-control my-3 shadow-none ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="error-message">{formik.errors.name}</div>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email*'
                                        className={`form-control my-3 shadow-none ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="error-message">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder='Phone*'
                                        className={`form-control my-3 shadow-none ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phone}
                                    />
                                    {formik.touched.phone && formik.errors.phone ? (
                                        <div className="error-message">{formik.errors.phone}</div>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder='Your Message*'
                                        className={`form-control shadow-none ${formik.touched.message && formik.errors.message ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.message}
                                    ></textarea>
                                    {formik.touched.message && formik.errors.message ? (
                                        <div className="error-message">{formik.errors.message}</div>
                                    ) : null}
                                </div>
                                <button type='sumit' name=' sumit' id="sumit">
                            Send Message 
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
