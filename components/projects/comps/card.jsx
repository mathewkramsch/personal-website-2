// card.jsx

export default function Card(props) {
    return (
        <div>
            <div>{props.projectData.title}</div>
            <div>{props.projectData.description}</div>
        </div>
    );
}
