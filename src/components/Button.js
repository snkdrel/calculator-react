function Button({ text, onClickButton }) {
    return (
        <button type='button' onClick={e => onClickButton(text) }>
            {text}
        </button>
    );
}

export default Button;