const ButtonListShimmer = () => {

    return (
        <div className="py-5 flex items-center justify-center mx-auto w-8/12">
            <div className="flex overflow-x-hidden scroll-smooth">
                {Array.from({length: 12}).map((_, index) => (
                    <button
                        key={index}
                        className="
                            bg-gray-200
                            px-3
                            py-1
                            rounded-lg
                            font-semibold
                            ml-3
                            hover:bg-gray-300
                            whitespace-nowrap
                            w-40
                            h-7"
                    >
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ButtonListShimmer;