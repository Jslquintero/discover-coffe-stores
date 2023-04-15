import Button from './button';

const Banner = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold tracking-tighter leading-none  min-[768]:leading-none">
                <span className="text-white">Coffe</span>
                <span className=" text-blue-950 max-md:block max-xl:inline">
                    Conoisseur</span>
            </h1>
            <p className='font-semibold text-lg mt-2.5'>Discover your local coffe shops!</p>
            <Button text="Get Started" styleClass="px-4 py-2 mt-2.5 rounded-none font-semibold text-lg text-white bg-sky-500 hover:bg-sky-700"/>
        </div>
    );
}

export default Banner;
