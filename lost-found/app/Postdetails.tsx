import Image from "next/image";

const Postdetails = () => {
    return (
        <div className="m-4 ">
            <Image
                src="/images/images1.jpg"
                alt="Image of the lost or found object"
                width={500}
                height={500}
                className=" rounded-xl p"
            />
            <div className=" flex mt-6 text-xl font-medium items-center flex-row justify-evenly gap-8 ">
                <div className="pl-12  pr-12 pt-2  pb-2 bg-lost-bg text-lost-text rounded-xl">
                    <p>Lost</p>
                </div>
                <div className="text-tag-text  flex flex-row gap-1 ">
                    <p>Oct 24, 2023</p>
                    <div></div>
                    <p>2 hours ago</p>
                </div>
            </div>
            <div>
                <h1 className="text-4xl font-bold mt-3 " >Silver iPhone 13 pro</h1>
            </div>
            <div className="flex mt-4 flex-row font-medium gap-4 ">
                <div className="p-2 bg-tag-bg text-tag-text rounded-xl">
                    <p>Electronic</p>
                </div>
                <div className="p-2 bg-tag-bg text-tag-text rounded-xl">
                    <p>High Value</p>
                </div>
            </div> 

            <div>
                
            </div>
        </div>
    );
};

export default Postdetails;