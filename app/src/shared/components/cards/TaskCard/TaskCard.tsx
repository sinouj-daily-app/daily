export const TaskCard = ({author, task, date}: Props) => {
    return (
        <article>
            <p>task card</p>
            <p>{author}</p>
            <p>{task}</p>
            <p>{date}</p>
        </article>
    )
}

interface Props {
    author: string,
    task: string,
    date: string
}