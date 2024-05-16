
const WasteFoodSection = () => {
    return (
        <div className="my-28">
            <h1 className="text-3xl lg:text-5xl font-bold text-center mb-14 w-4/5 lg:w-3/5 mx-auto">One-third of food produced for human consumption is wasted globally.</h1>
            <section className="p-4 lg:p-8">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://i.ibb.co/C8qzgmj/top-view-trash-cooking-concept.jpg" alt="" className="h-80 aspect-video rounded-2xl" />
                        <div className="flex flex-col justify-center flex-1 p-6 ">
                            <h3 className="text-3xl font-bold">The Environmental and Economic Toll of Wasted Food</h3>
                            <p className="my-6">It examines the financial losses incurred at various stages of the food supply chain, from production and distribution to households and restaurants. By highlighting the significant impact of food waste, this piece aims to raise awareness and inspire actionable solutions to this pressing global issue..</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://i.ibb.co/kBMhr6C/arrangement-compost-made-rotten-food-with-copy-space.jpg" alt="" className="h-80 aspect-video rounded-2xl" />
                        <div className="flex flex-col justify-center flex-1 p-6">
                            <h3 className="text-3xl font-bold">Food Waste: A Growing Crisis and the Path to Sustainable Solutions</h3>
                            <p className="my-6">It also highlights innovative strategies and best practices being implemented worldwide to reduce food waste, such as improved food distribution systems, enhanced storage technologies, and community-driven initiatives. By showcasing successful case studies and offering practical tips, the article aims to inspire individuals, businesses, and policymakers to take meaningful steps toward a more sustainable and waste-free future.</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://i.ibb.co/s6QHChg/simon-peel-ui-Bh1eegz-Q-unsplash.jpg" alt="" className="h-80 aspect-video rounded-2xl" />
                        <div className="flex flex-col justify-center flex-1 p-6">
                            <h3 className="text-3xl font-bold">From Surplus to Solution, Transforming Food Waste into Opportunity</h3>
                            <p className="my-6">By highlighting successful examples from around the world, it showcases how businesses, non-profits, and individuals are turning the food waste crisis into opportunities for social good, economic benefit, and environmental sustainability. The piece aims to inspire and inform readers about the potential to make a significant impact by transforming food waste into a resource.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default WasteFoodSection;