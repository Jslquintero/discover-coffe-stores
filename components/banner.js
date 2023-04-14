import Button from './button';

const Banner = () => {
    return (
        <div>
            <h1 className="text-6xl font-bold tracking-tight">
                <span className="text-white">Coffe</span>
                <span className=" text-blue-950 block">
                    Conoisseur</span>
            </h1>
            <p>Discover your local coffe shops!</p>
            <Button text="Get Started"/>
        </div>
    );
}

export default Banner;
