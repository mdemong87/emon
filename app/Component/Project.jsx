import SingleProject from "./SingleProject"

export default function Project() {
    return (
        <div id="portfolio" className="projctsWrp">
            <span className="into">Recent</span>
            <h2 className="heading">Projects</h2>
            <div className="projectsCardWrp">
                <SingleProject />
                <SingleProject />
                <SingleProject />
                <SingleProject />
                <SingleProject />
                <SingleProject />
            </div>
        </div>
    )
}
