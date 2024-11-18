import Part from "./Part";

const Content = ({ parts }) => {
    //parts.forEach(element=>console.log(element.name));
    return (
        parts.map(element => {
            console.log(element);
            return (<div>
                <Part part={element.name} exercise={element.exercises} />
            </div>);
        })

    );
}

export default Content;