import { FC } from "react";

interface Props {
    content: string
    action: () => void
}

const ButtonCounter: FC<Props> = ({ content, action }) => {

    return (
        <button className="counter-button" onClick={() => action()}>{content}</button>
    );
}

export default ButtonCounter;
