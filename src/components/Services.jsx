import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
                imgSrc="https://s3-alpha-sig.figma.com/img/7204/9980/83f531ee2438d9ba2bfd15ba7fda1097?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wbmn8r5Go8qF-QILkzLC16Il6vU0s~-Zk-61PG-dQcaciASp1ttzjtiP3dl6k~WMBCAWYmFcfhRxbFa-TrH4oRv0udK-sSlc1L9AAZFaUPBYyMcy3lCylWIzBSEjd9RYwgvCxLoRlAlRgcF8cwd0XzD4O59QZKD72OSDXGMlT7WGTdzWkmDzJhv93RhU2QyyN4FWvQyI-DUSdy-yK~rqWpg3nclI4JS8e2L0DB1GFA-Meb5Wd8CqES2bsLK8qGbm0BBuEN2MYkf5ppn3xLmdl-N38oSaru-XJhlF3d8FiNZfzGOZWZJnFPDIrzK13OpPGIYX2IN-P3XQAtwhr~sCEg__"
                animation={fadeInUp}
            />
                        <hr />

            <ServiceDetail
                number="1/2"
                title="Glazbeni događaji"
                description="Planiranje, produkciju i tehničku podršku za koncerte, festivale i evente. S nama je svaki detalj pod kontrolom, a vaš događaj nezaboravan! Od ideje do realizacije, brinemo o svemu!"
                imgSrc="https://s3-alpha-sig.figma.com/img/8648/2ba6/fd0a0bfd1a1c851fef316f7908796f03?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P9I--3~kMuLWXUOV7GPwWyQhvR0CF2nJ8wRAcBFjq2bfBQL6RQOS3GpGnSf4OJg7ylYDpKjeiyFXAC5WbbYO6PN0Rf2Jo2TveEPL~Ytdp9X4Lnd9tmRjsRwwSXwUz2Obrve9HWN8qsjN4QLK5g6J2vjMRsqpID4rAUSC7KWke5KZSeka-FUkLtMCrNdzPLd56dKW8tgBsFhrnVsm8ufzb0li38ayBridZ-y6NIw142WpkPfE1KnwGc1vTUrbHRJXKyUdCyV4MlEvgTSEZ0EIKDsYmYB~TIuR0bRZv3dQT0FGGfEdz1CJp--xUYWGJDIEJL06G7TtXDdAxHjVvk5ecA__"
                animation={fadeInUp}
            />
                        <hr />

            <ServiceDetail
                number="1/3"
                title="Iznajmljivanje opreme"
                description="Planiranje, produkciju i tehničku podršku za koncerte, festivale i evente. S nama je svaki detalj pod kontrolom, a vaš događaj nezaboravan! Od ideje do realizacije, brinemo o svemu!"
                imgSrc="https://s3-alpha-sig.figma.com/img/ea17/99d2/57c177e30a4bc85c0d7bb287939a0e95?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TLtLu-lceIysTtDJz5P6NbidG2WgJgSHNAzMpRbEocgAvt0KvCkRVcAVLmiQfF~dk5psfX9wxhGiqCL~6ZRpg0yVyzOcB2b4EnThNyGkdyo7FkHmf~CT-PdpGX0U7HD0KMVJDFGopFCSqY80C4xmTOiMOHTNfGAhi1mOLp9wN~MzwX0S5kk-tQWqxZNTRsf0MsL0kx3sgBy00jH75Jbbz~mFF8phmxQ6QJeHtOsaN6x~YjJQ64omvlzMKqoJxAbl3w8hEEO-lYORso92bOKS2DqwuDs1pW8A8O5ouWxppOafGbzT5j4O9hBz-pOCvUWJLrXPYL4MgSiVEBG9CRnksw__"
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
