

const VideoContainerShimmer = () => {

    return (
        <div className="flex flex-wrap pb-10">
            {
                Array.from({length: 12}).map((_, index) => (

                    <div key={index} className="mr-3 mt-7 w-[330px] animate-pulse">
                        <div className="bg-gray-300 h-[12rem] rounded-xl">
                        </div>

                        <div className="flex mt-3">
                            <div className="h-11 w-11 bg-gray-300 rounded-full"></div>
                            <div className="h-11 w-[300px] ml-3 rounded-lg bg-gray-300"></div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default VideoContainerShimmer;