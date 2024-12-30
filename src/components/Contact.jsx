import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { TypeAnimation } from 'react-type-animation';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState({
        from_name: '',
        email_from: '',
        message: '',
        event_form:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setSent(false);

        emailjs.sendForm('service_9tomjcg', 'template_ulcsmqf', e.target, 'DzgVsUQl4fs4w_hu3')
            .then((result) => {
                console.log(result.text);
                setSent(true);
                setFormData({ from_name: '', email_from: '', message: '', event_form: '' }); 
            }, (error) => {
                console.log(error.text);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-aside">
                <p>Imaš ideju za događaj? Javi nam se i podijeli svoju viziju – mi ćemo se pobrinuti za sve ostalo!</p>
                <p>
                    Naša adresa:<br />
                    <span>Ul.cara Hadrijana 13 <br />
                        31000 Osijek</span>
                </p>
                <p>
                    Telefon:<br />
                    <span>+385 91 506 4844</span>
                </p>
                <p>
                    E mail:<br />
                    <span>koncert@koncert.hr</span>
                </p>
            </div>
            <div className="contact-form">
                <h2>0/3</h2>
                <div style={{ height: '8rem' }}>
                    <TypeAnimation
                        sequence={[
                            'Trebate pomoć oko produkcije?',
                            2000,
                            'Trebate pomoć oko ogranizacije?',
                            2000,
                            'Trebate pomoć oko opreme?',
                            2000,
                            'Trebate pomoć oko produkcije?',
                        ]}
                        speed={50}
                        style={{ fontSize: '3rem', lineHeight: '4rem' }}
                        repeat={1}
                    />
                </div>

                <p className="contact-aside-text">Imaš ideju za događaj? Javi nam se i podijeli svoju viziju – mi ćemo se pobrinuti za sve ostalo!</p>
                <div className="form-container">
                    <form className="event-form" onSubmit={handleEmail}>
                        <input
                            type="text"
                            id="from_name"
                            name="from_name"
                            required
                            placeholder="Ime i prezime"
                            value={formData.from_name}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <input
                            type="email"
                            id="email_from"
                            name="email_from"
                            required
                            placeholder="E-mail adresa"
                            value={formData.email_from}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                          <input
                            type="event"
                            id="event_form"
                            name="event_form"
                            required
                            placeholder="Tip događaja"
                            value={formData.event_form}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Vaš upit"
                            value={formData.message}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        <button type="submit" className="button-primary contact-button" disabled={loading}>
                            {loading ? 'PRIČEKAJTE...' : sent ? 'POSLANO' : 'POŠALJI'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;