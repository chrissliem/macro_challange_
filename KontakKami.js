import React, { useState } from 'react';
import './kontak-kami.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <main className="main-content">
            <h1 className="title">Kontak Kami</h1>
            <p className="subtitle">Ada pertanyaan atau komentar? Tulis saja pesan kepada kami!</p>

            <div className="contact-container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Informasi Kontak</h2>
                        <p>Katakan sesuatu untuk memulai obrolan langsung!</p>
                        <p className="phone-number">
                            <img src="phone-logo.svg" alt="Phone" /> +62 812 0987 654
                        </p>
                        <p className="email">
                            <a href="mailto:velozbicycle@gmail.com">
                                <img src="email-logo.svg" alt="Email" /> velozbicycle@gmail.com
                            </a>
                        </p>
                        <div className="social-icons">
                            <a href="#"><img src="x-logo.svg" alt="X" /></a>
                            <a href="#"><img src="ig-logo.svg" alt="Instagram" /></a>
                            <a href="#"><img src="dc-logo.svg" alt="Discord" /></a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="input-group">
                                <label htmlFor="first-name">Nama Depan</label>
                                <input
                                    type="text"
                                    id="first-name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="-"
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="last-name">Nama Belakang</label>
                                <input
                                    type="text"
                                    id="last-name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="-"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="-"
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="phone">No. Telepon</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="No. Telepon"
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Pesan</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tulis pesan Anda"
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Kirim Pesan</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default ContactUs;
