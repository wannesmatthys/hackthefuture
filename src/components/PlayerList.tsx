interface IProps {
    players: string[]
}

const PlayerList = (props: IProps): JSX.Element => {
    const { players } = props;

    return (
        <ul className="mb-3">
            { players.map(player => <li key={player}>{player}</li>)}
        </ul>
    )
}

export default PlayerList;