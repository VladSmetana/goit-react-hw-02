import css from './Notification.module.css'
export default function Notification({ message }) {
    return (
        <div className={css.notification}>
            <p>{message}</p>
        </div>
    );
}
