// props
interface Props {
  success: boolean;
  title?: string;
  message: string;
}

const Message: React.FC<Props> = ({ success, title, message }) => {
  return (
    <div
      className="message active"
      style={{ background: success ? "#3498db" : "#f00" }}
    >
      {title ? <h3>{title}</h3> : null}
      <p>{message}</p>
    </div>
  );
};

export default Message;
