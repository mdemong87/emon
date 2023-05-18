

export default function DoCard({ icon, heading, discription }) {
    return (
        <div className="doCradwp">
            <h1>{icon}</h1>
            <h1 className="docardheading">{heading}</h1>
            <p className="docarddis">{discription}</p>
        </div>
    )
}
