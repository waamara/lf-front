import Image from "next/image";

const Postdetails = () => {
    return (
        <div className="m-4  ">
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
            <div className="flex mt-4  flex-row font-medium gap-4 ">
                <div className="p-2 bg-tag-bg text-tag-text rounded-xl">
                    <p>Electronic</p>
                </div>
                <div className="p-2 bg-tag-bg text-tag-text rounded-xl">
                    <p>High Value</p>
                </div>
            </div>

            <div className="rounded-2xl flex  flex-col  ">
                <div className="flex flex-col ml-16 p-3 bg-card-bg" >
                    <p className="text-xl font-semibold">Last seen at</p>
                    <p className="text-tag-text">Central Park, Norh Entrance</p>
                </div>
                <div className="text-lg  ">
                    <h1 className="text-2xl font-bold mt-4">Description</h1>
                    <p className="mt-3 text-body  ">
                        I lost my silver iPhone 13 Pro near the north entrance of Central Park this afternoon around 2 PM. It has a clear silicone case with a small scratch on the bottom left corner.
                        The phone is locked and the "Find My" feature has been activated. If found, please contact me immediately. There is a reward for its safe return.
                    </p>
                </div>
            </div> 
            <div className="mt-10 p-3 rounded-xl bg-found-bg text-found-text border-[0.1px] border-found-text ">
                <p className="text-xl font-semibold text-green-900">Reward Offred </p>
                <p> A cash reward will be given upon return.</p>
            </div>
            <div className=" mt-10 text-2xl font-semibold bg-primary text-white rounded-2xl p-6  flex  items-center  justify-center">
                <button>Contact Owner</button>
            </div>
            <div className="flex flex-row justify-evenly gap-6 mt-8 text-xl  font-medium">
                <div className="">Report Post</div>
                <div> Delete Post</div>
            </div>
        </div>
    );
};

export default Postdetails;