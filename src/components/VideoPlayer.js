
const VideoPlayer = (props) => {

    const { videoId } = props;

    return (
        <div className="">
            <div className="mt-2 rounded-lg">
                <iframe
                    className="rounded-xl"
                    width="660"
                    height="400"
                    src={"https://www.youtube.com/embed/" + videoId + "?rel=0&autoplay=1"}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default VideoPlayer;