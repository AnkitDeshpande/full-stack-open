export default function Stats({ text, stat, symbol }) {
    return (
        <tr>
            <td>{text}</td> <td>{stat} {symbol}</td>
        </tr>
    );
}