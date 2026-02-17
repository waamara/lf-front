
const CreatPost = () => {
    return (
        <div className=" bg-card-bg  p-8 rounded-xl h-screen   m-4">
            <p className=" text-2xl font-bold " > What's the  situation ? </p>
            <div className="flex-row  bg-purple-100 hover rounded-xl p-4 mt-2 flex gap-2          ">
                <button className="  hover:text-white  p-3 rounded-xl   " >
                    <p>I lost Something</p>
                </button>
                <button  className="bg-white p-3 rounded-xl ">
                    <p>I found Something</p>
                </button>
            </div>
            <form action="" className="">
                <div className=" flex-col  items-center pt-2 ">
                    <label htmlFor="" className="text-gray-600   ">Item Title</label>
                    <input type="text" className=" h-10 w-full mt-2  bg-input-bg  placeholder:text-gray-500   border-border border-[0.5px]  rounded-md " />
                </div>
                <div className=" flex-col  items-center pt-2 ">
                    <label htmlFor="" className="text-gray-600   "> Description</label>
                    <input type="text"  className=" h-10 w-full mt-2 bg-input-bg placeholder:text-gray-500   border-border border-[0.5px] rounded-md " />
                </div>
                <div className=" flex-col  items-center pt-2 ">
                    <label htmlFor="" className="text-gray-600   ">Last seen Location</label>
                    <input type="text" className=" h-10 w-full mt-2 bg-input-bg  placeholder:text-gray-500 border-   border-border border-[0.5px] rounded-md " />
                </div>
                <div className=" flex-col  items-center pt-2 ">
                    <label htmlFor="" className="text-gray-600   ">Photos </label>
                    <input type="image" className=" h-10 w-full mt-2  bg-input-bg placeholder:text-gray-500   border-border border-[0.5px] rounded-md " />
                </div>
                <div className="m-12 bg-primary      ">
                    <button className="   h-12 rounded-xl w-64 text-white text-xl font-semibold   "> Post My Item</button>
                </div>

            </form>
            <p className="text-gray-500 text-center">By posting , you agree to our community <br /> guidelines .  Please do not include sensitive <br /> personal informaion .</p>
        </div>
    )
}

export default CreatPost