import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
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
                description="Planiranje, produkciju i tehničku podršku za koncerte, festivale i evente. S nama je svaki detalj pod kontrolom, a vaš događaj nezaboravan! Od ideje do realizacije, brinemo o svemu!"
                imgSrc={image4}
                animation={fadeInUp}
            />
                        <hr />

            <ServiceDetail
                number="1/2"
                title="Glazbeni događaji"
                description="Planiranje, produkciju i tehničku podršku za koncerte, festivale i evente. S nama je svaki detalj pod kontrolom, a vaš događaj nezaboravan! Od ideje do realizacije, brinemo o svemu!"
                imgSrc={image4}
                animation={fadeInUp}
            />
                        <hr />

            <ServiceDetail
                number="1/3"
                title="Iznajmljivanje opreme"
                description="Planiranje, produkciju i tehničku podršku za koncerte, festivale i evente. S nama je svaki detalj pod kontrolom, a vaš događaj nezaboravan! Od ideje do realizacije, brinemo o svemu!"
                imgSrc={image4}
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
