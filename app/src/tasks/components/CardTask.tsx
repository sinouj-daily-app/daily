import './CardTask.scss'

export const CardTask = ({author, task, date}: Props) => {
    return (
        <article>
            <header>
                <span>{author}</span>
                <i></i>
            </header>
            <p>{task}</p>
            <span>{date}</span>
        </article>
    )
}

interface Props {
    author: string,
    task: string,
    date: string
}