import Image from "next/image";

const Postdetails = () => {
    return (
        <div className="m-4">
            <Image
                src="/images/images1.jpg"
                alt="Image of the lost or found object"
                width={500}
                height={500}
                className=" rounded-xl p"
            />
        </div>
    );
};

export default Postdetails;