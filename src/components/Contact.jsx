 
const Contact = () => {
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
                <h1>Pokreni svoj <br />event</h1>
                <p className="contact-aside-text">Imaš ideju za događaj? Javi nam se i podijeli svoju viziju – mi ćemo se pobrinuti za sve ostalo!</p>
                <div className="form-container">
            <form className="event-form">
                <input type="text" id="name" name="name" required  placeholder="Ime i prezime"  autocomplete="off"/>
                <input type="email" id="email" name="email" required placeholder="E-mail adresa" autocomplete="off"/>
                <textarea id="query" name="query" required placeholder="Vaš upit"  autocomplete="off"></textarea>
            </form>
            <button type="submit" className="button-primary contact-button">POŠALJI</button>

        </div>
            </div>
        </section>
    )
}

export default Contact;