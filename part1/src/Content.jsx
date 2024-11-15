import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            <Part part1={props.part1} exercise1={props.exercise1}/>
            <Part part1={props.part2} exercise1={props.exercise2}/>
            <Part part1={props.part3} exercise1={props.exercise3}/>
        </div>
    );
}

export default Content;