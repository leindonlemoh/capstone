import React from "react";
import { useStateContext } from "../../context/StateContext";
import "./Accordion.scss";

const Accordion = () => {
    const { accordionIndex, toggleAccordion } = useStateContext();

    return (
        <>
            <div className='accordion__container'>
                <div className='accordion'>
                    {faqItems.map((faqItem, i) => (
                        <div className='accordion__item' key={i}>
                            <div
                                className={
                                    accordionIndex === i
                                        ? "accordion__title flex accordionActive"
                                        : "accordion__title flex "
                                }
                                onClick={() => toggleAccordion(i)}
                            >
                                {faqItem.question}

                                {accordionIndex === i ? (
                                    <i className='bi bi-dash'></i>
                                ) : (
                                    <i className='bi bi-plus'></i>
                                )}
                            </div>
                            <div
                                className={
                                    accordionIndex === i
                                        ? "accordion__content__open"
                                        : "accordion__content__close"
                                }
                            >
                           <p>{faqItem.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const faqItems = [
    {
        question: "Why is your bread so dark?",
        answer: "Our long fermentation process causes grains to release their nutrients and natural sugars. That’s how we get a dark, caramelised crust that’s richer in flavour and chewier in texture.",
    },

    {
        question: "Where do you source your ingredients?",
        answer: "We use the best ingredients we can find and favor organic, seasonal, local and sustainable options wherever possible. Some of these ingredients are Australian organic flour from Wholegrain Milling; organic Woodstock Flour from Berrigan, NSW; milk from St David's Dairy in Gippsland; eggs from Honest Eggs Co. in Daylesford; and Olsson's salt from Port Alma, QLD and Whyalla, SA. We even use ingredients grown right here in the organic Wildwood garden such as Himalayan marigolds, which topped our mandarin and almond croissants. We use hazelnuts from Piedmont, Italy, cultured French butter and Valrhona chocolate from France (they're the best you can get and unparalleled in quality so we won't compromise on these).",
    },

    {
        question: "When do you deliver?",
        answer: "Right now we deliver products on our online store between 7 and 9:30 am on Saturdays. The order cut-off is midday on Fridays for delivery the next day. Orders placed after midday on Fridays are delivered the following Saturday. We'll send you a text message when your order has been delivered.",
    },

    {
        question: "How do I shop in store?",
        answer: "Weigh your containers on the ‘tare’ station at the front OR choose a reusable container / paper bag. Write the product code refill as much or as little as you like!Checkout",
    },

    {
        question: "Do you have a larger selection in-store?",
        answer: "We do! We plan to rollout more products online soon, but in the meantime, there’s a lot more liquid and refrigerated products in-store.",
    },

    {
        question: "How are deliveries packed?",
        answer: "100% plastic-free. Dry goods are packed in our 100% post-consumer recycled content compostable paper bags. Wet goods are packed in our reusable glass jars / bottles. Our boxes are 100% post-consumer recycled content.",
    },
    {
        question: "Can I order online for pickup from your store?",
        answer: "Yes! It takes us anywhere from an hour to a few hours to pack your order, depending on how busy we are. We will email you when your order is ready.",
    },
];

export default Accordion;
