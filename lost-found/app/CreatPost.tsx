
const CreatPost = () => {
    return (
        <div className="  m-4">
            <p className=" text-2xl font-semibold m " > What's he  situation ? </p>
            <div className="flex-row p-4 flex-between items-center ">
                <button>
                    <p>I lost Something</p>
                </button>
                <button>
                    <p>I found Something</p>
                </button>
            </div>
            <form action="" className="">
                <div className=" flex-col  items-center pt-2 ">
                    <label htmlFor="" className="text-gray-600   ">Item Title</label>
                    <input type="text" className=" h-6 w-full  bg-amber-100 placeholder:text-gray-500   border-gray-500 border-0.5 rounded-md " />
                </div>
                <div className=" flex-col  items-center pt-2 ">
                    <label htmlFor="" className="text-gray-600   ">Item Description</label>
                    <input type="text" className=" h-6 w-full  bg-amber-100 placeholder:text-gray-500   border-gray-500 border-0.5 rounded-md " />
                </div>
                <div className=" flex-col  items-center pt-2 ">
                    <label htmlFor="" className="text-gray-600   ">Item Title</label>
                    <input type="text" className=" h-6 w-full  bg-amber-100 placeholder:text-gray-500   border-gray-500 border-0.5 rounded-md " />
                </div>
                <div className=" flex-col  items-center pt-2 ">
                    <label htmlFor="" className="text-gray-600   ">Item Location</label>
                    <input type="text" className=" h-6 w-full  bg-amber-100 placeholder:text-gray-500   border-gray-500 border-0.5 rounded-md " />
                </div>
                <div>
                    <button> Post My Item</button>
                </div>

            </form>
            <p>By posting , yu agree o our community guidelines .  Please do not include sensitive personal informaion .</p>
        </div>
    )
}

export default CreatPost