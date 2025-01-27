import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image2 from '../images/glazbeni.jpeg';
import image3 from '../images/oprema.jpeg';
import image4 from '../images/image4.png';

const Services = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const fadeInUp = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section id="services">
            <motion.div className="section-title"       
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}>
                <h2>0/1</h2>
                <h1>Naše usluge</h1>
                <p>Prilagođeno vašim potrebama – od najma opreme, produkcije do prodaje ulaznica.</p>
            </motion.div>
            <hr />
            
            <ServiceDetail
                number="1/1"
                title="Komercijalni eventi"
                description="Organiziramo i realiziramo nezaboravne komercijalne evente! Od inovativnog planiranja do tehničke produkcije, svaki detalj je u sigurnim rukama našeg stručnog tima. Vaša vizija, naša izvedba!"
                imgSrc={image4}
                animation={fadeInUp}
            />
                        <hr />

            <ServiceDetail
                number="1/2"
                title="Glazbeni događaji"
                description="Stvaramo nezaboravne glazbene doživljaje! Bilo da se radi o koncertima, festivalima ili posebnim glazbenim večerima, pružamo kompletnu produkciju i tehničku podršku kako bismo ostvarili sve vaše ideje."
                imgSrc={image2}
                animation={fadeInUp}
            />
                        <hr />

            <ServiceDetail
                number="1/3"
                title="Iznajmljivanje opreme"
                description="Nudimo profesionalnu opremu za svaki tip događaja! Naša vrhunska tehnologija i stručna podrška osiguravaju da vaš event bude tehnički savršen i besprijekorno izveden."
                imgSrc={image3}
                animation={fadeInUp}
            />
            <hr />
        </section>
    );
};

const ServiceDetail = ({ number, title, description, imgSrc, animation }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            className="service-details"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animation}
            transition={{ duration: 0.6 }}
        >
            <h2>{number}</h2>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <img src={imgSrc} alt={title} />
        </motion.div>
    );
};

export default Services;
