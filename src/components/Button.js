function Button({ text, onClickButton }) {
    return (
        <button type='button' onClick={onClickButton}>
            {text}
        </button>
    );
}

export default Button;