import cls from './BetweenTitle.module.scss'

const BetweenTitle = ({content, color}) => {
    return (
        <h1 className={cls.root} style={{color}}>{content}</h1>
    )
}

export default BetweenTitle