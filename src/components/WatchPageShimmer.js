

const WatchPageShimmer = () => {

    return (
        <div className="pt-20 pl-24 h-screen flex animate-pulse">
            <div className="h-[400px] w-[55%]">
                <div className="h-full w-full bg-gray-300 rounded-lg"></div>

                <div className="flex mt-3">
                    <div className="h-11 w-11 bg-gray-300 rounded-full"></div>
                    <div className="h-11 w-[150px] ml-3 rounded-lg bg-gray-300"></div>
                    <div className="ml-3 h-9 self-center w-[120px] rounded-full bg-gray-300"></div>

                    <div className="flex ml-auto">
                        <div className="h-9 self-center w-[120px] rounded-full bg-gray-300"></div>
                        <div className="ml-3 h-9 self-center w-[100px] rounded-full bg-gray-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchPageShimmer;