import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"


const FAQ = () => {
    const FAQ = [
        {
            question: "What is PixelBrew AI, and how does it work?",
            answer: "PixelBrew AI is an AI image generator platform where users can generate their own personalised AI images."
        },
        {
            question: "What types of images can I generate with PixelBrew AI?",
            answer: "You can unleash your creativity and generate images for yourself for fun purposes, thumbnails for your content creation."
        },
        {
            question: "How does the custom model training feature in PixelBrew AI work?",
            answer: "You can train a custom AI model on your photos to generate highly realisitc photos of yourself."
        },
        {
            question: "Are the images generated by PixelBrew AI suitable for commercial use?",
            answer: "Yeah it has potential to generate ready to use thumbnails if given the right training photos and prompt."
        },
        {
            question: "What should I do if I encounter issues with payment or generated images?",
            answer: "you can contact us at 100xdevspiyush@gmail.com"
        },
    ]

    return (
        <div className="font-sans bg-black text-gray-300 py-7">
            <div className=" text-center font-sans font-extralight text-2xl mb-12"> GENERAL FAQ </div>
            <div className="w-[90%] m-auto">
                <Accordion type="single" collapsible>
                    {
                        FAQ.map((data, index) => (
                            <AccordionItem value={`item-${index}`} className="border-gray-900">
                                <AccordionTrigger className="font-normal text-base">{data.question}</AccordionTrigger>
                                <AccordionContent >
                                    <div className="text-gray-400">
                                        {data.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>

            </div>
        </div>
    )
}

export default FAQ